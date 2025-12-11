-- Remove Watermark Pro - Supabase Database Schema
-- This script creates all necessary tables for the application

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. USERS TABLE
-- =====================================================
-- Stores user profile information (extends Supabase Auth)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    avatar_url TEXT,
    registration_date TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Users can only read/update their own data
CREATE POLICY "Users can view own data" ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
    FOR UPDATE USING (auth.uid() = id);

-- =====================================================
-- 2. SUBSCRIPTIONS TABLE
-- =====================================================
-- Manages user subscription plans and billing
CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    plan_type TEXT NOT NULL CHECK (plan_type IN ('free', 'pro', 'lifetime')),
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired', 'paused')),
    price DECIMAL(10, 2) DEFAULT 0.00,
    currency TEXT DEFAULT 'USD',
    billing_cycle_start TIMESTAMPTZ,
    billing_cycle_end TIMESTAMPTZ,
    auto_renew BOOLEAN DEFAULT TRUE,
    promo_discount INTEGER DEFAULT 0, -- percentage discount (0-100)
    payment_provider TEXT, -- 'stripe', 'paypal', etc.
    payment_id TEXT, -- external payment/subscription ID
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id) -- One active subscription per user
);

-- Enable Row Level Security
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscription" ON subscriptions
    FOR SELECT USING (auth.uid() = user_id);

-- =====================================================
-- 3. CREDITS TABLE
-- =====================================================
-- Tracks user credits for AI operations
CREATE TABLE IF NOT EXISTS credits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    total_credits INTEGER NOT NULL DEFAULT 0,
    used_credits INTEGER NOT NULL DEFAULT 0,
    remaining_credits INTEGER GENERATED ALWAYS AS (total_credits - used_credits) STORED,
    reset_date TIMESTAMPTZ, -- Date when credits reset (for monthly plans)
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id) -- One credits record per user
);

-- Enable Row Level Security
ALTER TABLE credits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own credits" ON credits
    FOR SELECT USING (auth.uid() = user_id);

-- =====================================================
-- 4. USAGE_HISTORY TABLE
-- =====================================================
-- Logs all AI operations performed by users
CREATE TABLE IF NOT EXISTS usage_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    operation_type TEXT NOT NULL CHECK (operation_type IN (
        'watermark_removal',
        'remove_background',
        'replace_background',
        'remove_object',
        'remove_text',
        'auto_remove_people',
        'image_upscaler',
        'video_watermark_removal'
    )),
    credits_used INTEGER NOT NULL DEFAULT 1,
    input_file_url TEXT,
    output_file_url TEXT,
    file_size_kb INTEGER,
    processing_time_ms INTEGER,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
    error_message TEXT,
    metadata JSONB, -- Additional data (dimensions, format, etc.)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_usage_history_user_id ON usage_history(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_history_created_at ON usage_history(created_at);
CREATE INDEX IF NOT EXISTS idx_usage_history_operation_type ON usage_history(operation_type);

-- Enable Row Level Security
ALTER TABLE usage_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own usage history" ON usage_history
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own usage history" ON usage_history
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- 5. TRIGGERS
-- =====================================================

-- Automatically update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at
    BEFORE UPDATE ON subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_credits_updated_at
    BEFORE UPDATE ON credits
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 6. FUNCTIONS
-- =====================================================

-- Function to initialize new user with free plan
CREATE OR REPLACE FUNCTION initialize_new_user()
RETURNS TRIGGER AS $$
BEGIN
    -- Create user profile
    INSERT INTO users (id, email, registration_date)
    VALUES (NEW.id, NEW.email, NOW())
    ON CONFLICT (id) DO NOTHING;
    
    -- Create free subscription
    INSERT INTO subscriptions (user_id, plan_type, status, price, billing_cycle_start, billing_cycle_end)
    VALUES (
        NEW.id,
        'free',
        'active',
        0.00,
        NOW(),
        NOW() + INTERVAL '1 year'
    )
    ON CONFLICT (user_id) DO NOTHING;
    
    -- Initialize credits (free plan gets 10 credits per month)
    INSERT INTO credits (user_id, total_credits, used_credits, reset_date)
    VALUES (
        NEW.id,
        10,
        0,
        NOW() + INTERVAL '30 days'
    )
    ON CONFLICT (user_id) DO NOTHING;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-initialize user on signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION initialize_new_user();

-- Function to deduct credits on usage
CREATE OR REPLACE FUNCTION deduct_credits(p_user_id UUID, p_credits INTEGER)
RETURNS BOOLEAN AS $$
DECLARE
    v_remaining INTEGER;
BEGIN
    -- Check if user has enough credits
    SELECT remaining_credits INTO v_remaining
    FROM credits
    WHERE user_id = p_user_id;
    
    IF v_remaining >= p_credits THEN
        -- Deduct credits
        UPDATE credits
        SET used_credits = used_credits + p_credits
        WHERE user_id = p_user_id;
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 7. SAMPLE DATA (FOR TESTING - REMOVE IN PRODUCTION)
-- =====================================================
-- Uncomment below to insert sample data for testing

/*
-- Note: You'll need to create an auth user first through Supabase Auth UI
-- Then use that user's ID here

INSERT INTO users (id, email, name) VALUES
('your-user-id-here', 'test@example.com', 'Test User');

INSERT INTO subscriptions (user_id, plan_type, status, price, billing_cycle_start, billing_cycle_end) VALUES
('your-user-id-here', 'pro', 'active', 9.99, NOW(), NOW() + INTERVAL '1 month');

INSERT INTO credits (user_id, total_credits, used_credits, reset_date) VALUES
('your-user-id-here', 100, 25, NOW() + INTERVAL '30 days');

INSERT INTO usage_history (user_id, operation_type, credits_used, status) VALUES
('your-user-id-here', 'watermark_removal', 1, 'completed'),
('your-user-id-here', 'remove_background', 1, 'completed'),
('your-user-id-here', 'image_upscaler', 2, 'completed');
*/
