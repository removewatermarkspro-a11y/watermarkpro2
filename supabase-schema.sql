-- ============================================================================
-- REMOVE WATERMARK PRO - SUPABASE DATABASE SCHEMA
-- ============================================================================
-- This script creates all necessary tables, policies, functions, and triggers
-- for the Remove Watermark Pro application.
--
-- Execute this in your Supabase SQL Editor:
-- https://fnanqsllnsbywfnfqqop.supabase.co/project/fnanqsllnsbywfnfqqop/sql/new
-- ============================================================================

-- ============================================================================
-- 1. ENABLE REQUIRED EXTENSIONS
-- ============================================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- 2. CREATE TABLES
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 2.1 Users Profile Table
-- ----------------------------------------------------------------------------
-- Extends the auth.users table with additional profile information
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);

-- ----------------------------------------------------------------------------
-- 2.2 Credits Table
-- ----------------------------------------------------------------------------
-- Tracks user credit balances and lifetime usage
CREATE TABLE IF NOT EXISTS public.credits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
    balance INTEGER DEFAULT 1 NOT NULL CHECK (balance >= 0),
    lifetime_credits INTEGER DEFAULT 1 NOT NULL,
    last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for faster user_id lookups
CREATE INDEX IF NOT EXISTS idx_credits_user_id ON public.credits(user_id);

-- ----------------------------------------------------------------------------
-- 2.3 Subscriptions Table
-- ----------------------------------------------------------------------------
-- Manages user subscription plans and billing cycles
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
    plan_type TEXT DEFAULT 'free' NOT NULL CHECK (plan_type IN ('free', 'pro')),
    status TEXT DEFAULT 'active' NOT NULL CHECK (status IN ('active', 'cancelled', 'expired')),
    price DECIMAL(10, 2) DEFAULT 0.00,
    billing_cycle_start TIMESTAMPTZ DEFAULT NOW(),
    billing_cycle_end TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '1 month'),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for faster user_id lookups
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);

-- ----------------------------------------------------------------------------
-- 2.4 Usage History Table
-- ----------------------------------------------------------------------------
-- Tracks all image/video processing operations
CREATE TABLE IF NOT EXISTS public.usage_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    operation_type TEXT NOT NULL CHECK (operation_type IN (
        'watermark_removal',
        'video_watermark_removal',
        'remove_text',
        'remove_object',
        'replace_background',
        'remove_background',
        'auto_remove_people',
        'image_upscaler'
    )),
    credits_used INTEGER DEFAULT 1 NOT NULL,
    file_size INTEGER, -- in bytes
    processing_time INTEGER, -- in milliseconds
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_usage_history_user_id ON public.usage_history(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_history_created_at ON public.usage_history(created_at DESC);

-- ----------------------------------------------------------------------------
-- 2.5 Favorites Table
-- ----------------------------------------------------------------------------
-- Stores user's favorite/saved processed images
CREATE TABLE IF NOT EXISTS public.favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    operation_type TEXT NOT NULL,
    original_image_url TEXT,
    processed_image_url TEXT NOT NULL,
    title TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_created_at ON public.favorites(created_at DESC);

-- ----------------------------------------------------------------------------
-- 2.6 Download History Table
-- ----------------------------------------------------------------------------
-- Tracks all user downloads for analytics and recovery
CREATE TABLE IF NOT EXISTS public.download_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    operation_type TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_size INTEGER, -- in bytes
    downloaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_download_history_user_id ON public.download_history(user_id);
CREATE INDEX IF NOT EXISTS idx_download_history_downloaded_at ON public.download_history(downloaded_at DESC);

-- ============================================================================
-- 3. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usage_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.download_history ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- 3.1 Users Table Policies
-- ----------------------------------------------------------------------------

-- Users can view their own profile
CREATE POLICY "Users can view own profile"
    ON public.users FOR SELECT
    USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON public.users FOR UPDATE
    USING (auth.uid() = id);

-- ----------------------------------------------------------------------------
-- 3.2 Credits Table Policies
-- ----------------------------------------------------------------------------

-- Users can view their own credits
CREATE POLICY "Users can view own credits"
    ON public.credits FOR SELECT
    USING (auth.uid() = user_id);

-- Users can update their own credits (via functions only, but allow for flexibility)
CREATE POLICY "Users can update own credits"
    ON public.credits FOR UPDATE
    USING (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 3.3 Subscriptions Table Policies
-- ----------------------------------------------------------------------------

-- Users can view their own subscription
CREATE POLICY "Users can view own subscription"
    ON public.subscriptions FOR SELECT
    USING (auth.uid() = user_id);

-- Users can update their own subscription
CREATE POLICY "Users can update own subscription"
    ON public.subscriptions FOR UPDATE
    USING (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 3.4 Usage History Table Policies
-- ----------------------------------------------------------------------------

-- Users can view their own usage history
CREATE POLICY "Users can view own usage history"
    ON public.usage_history FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own usage records
CREATE POLICY "Users can insert own usage history"
    ON public.usage_history FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 3.5 Favorites Table Policies
-- ----------------------------------------------------------------------------

-- Users can view their own favorites
CREATE POLICY "Users can view own favorites"
    ON public.favorites FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own favorites
CREATE POLICY "Users can insert own favorites"
    ON public.favorites FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own favorites
CREATE POLICY "Users can update own favorites"
    ON public.favorites FOR UPDATE
    USING (auth.uid() = user_id);

-- Users can delete their own favorites
CREATE POLICY "Users can delete own favorites"
    ON public.favorites FOR DELETE
    USING (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 3.6 Download History Table Policies
-- ----------------------------------------------------------------------------

-- Users can view their own download history
CREATE POLICY "Users can view own download history"
    ON public.download_history FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own download records
CREATE POLICY "Users can insert own download history"
    ON public.download_history FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- 4. DATABASE FUNCTIONS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 4.1 Handle New User Registration
-- ----------------------------------------------------------------------------
-- Automatically creates profile, credits, and subscription when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    -- Insert into users table
    INSERT INTO public.users (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'avatar_url'
    );

    -- Insert initial credits (1 free credit)
    INSERT INTO public.credits (user_id, balance, lifetime_credits)
    VALUES (NEW.id, 1, 1);

    -- Insert free subscription
    INSERT INTO public.subscriptions (user_id, plan_type, status, price)
    VALUES (NEW.id, 'free', 'active', 0.00);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ----------------------------------------------------------------------------
-- 4.2 Consume Credit Function
-- ----------------------------------------------------------------------------
-- Safely deducts credits and records usage
CREATE OR REPLACE FUNCTION public.consume_credit(
    p_user_id UUID,
    p_operation_type TEXT,
    p_file_size INTEGER DEFAULT NULL,
    p_processing_time INTEGER DEFAULT NULL
)
RETURNS BOOLEAN AS $$
DECLARE
    current_balance INTEGER;
BEGIN
    -- Get current balance with row lock
    SELECT balance INTO current_balance
    FROM public.credits
    WHERE user_id = p_user_id
    FOR UPDATE;

    -- Check if user has enough credits
    IF current_balance < 1 THEN
        RETURN FALSE;
    END IF;

    -- Deduct credit
    UPDATE public.credits
    SET balance = balance - 1,
        last_updated = NOW()
    WHERE user_id = p_user_id;

    -- Record usage
    INSERT INTO public.usage_history (user_id, operation_type, credits_used, file_size, processing_time)
    VALUES (p_user_id, p_operation_type, 1, p_file_size, p_processing_time);

    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ----------------------------------------------------------------------------
-- 4.3 Get User Credits Function
-- ----------------------------------------------------------------------------
-- Retrieves current credit balance for a user
CREATE OR REPLACE FUNCTION public.get_user_credits(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
    user_balance INTEGER;
BEGIN
    SELECT balance INTO user_balance
    FROM public.credits
    WHERE user_id = p_user_id;

    RETURN COALESCE(user_balance, 0);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ----------------------------------------------------------------------------
-- 4.4 Add Credits Function
-- ----------------------------------------------------------------------------
-- Adds credits to user account (for purchases or promotions)
CREATE OR REPLACE FUNCTION public.add_credits(
    p_user_id UUID,
    p_amount INTEGER
)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE public.credits
    SET balance = balance + p_amount,
        lifetime_credits = lifetime_credits + p_amount,
        last_updated = NOW()
    WHERE user_id = p_user_id;

    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ----------------------------------------------------------------------------
-- 4.5 Update Subscription Function
-- ----------------------------------------------------------------------------
-- Updates user subscription plan
CREATE OR REPLACE FUNCTION public.update_subscription(
    p_user_id UUID,
    p_plan_type TEXT,
    p_price DECIMAL DEFAULT 0.00
)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE public.subscriptions
    SET plan_type = p_plan_type,
        price = p_price,
        billing_cycle_start = NOW(),
        billing_cycle_end = NOW() + INTERVAL '1 month',
        status = 'active',
        updated_at = NOW()
    WHERE user_id = p_user_id;

    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- 5. TRIGGERS
-- ============================================================================

-- Create trigger to automatically handle new user signups
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- ============================================================================
-- 6. UPDATED_AT TRIGGERS
-- ============================================================================

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to users table
DROP TRIGGER IF EXISTS update_users_updated_at ON public.users;
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Apply to subscriptions table
DROP TRIGGER IF EXISTS update_subscriptions_updated_at ON public.subscriptions;
CREATE TRIGGER update_subscriptions_updated_at
    BEFORE UPDATE ON public.subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================================
-- SETUP COMPLETE
-- ============================================================================
-- Database schema created successfully!
-- Next steps:
-- 1. Verify all tables are created in Table Editor
-- 2. Check that RLS is enabled on all tables
-- 3. Test authentication flow
-- 4. Configure Google OAuth in Authentication > Providers
-- ============================================================================
