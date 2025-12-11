# Supabase Setup Guide

## 📋 Prerequisites

- Supabase account
- Project URL: `https://fnanqsllnsbywfnfqqop.supabase.co`
- Anon key (already provided)

## 🚀 Quick Setup

### Step 1: Install Dependencies

```bash
npm install @supabase/supabase-js
```

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Your `.env.local` should already have the correct values:
```
NEXT_PUBLIC_SUPABASE_URL=https://fnanqsllnsbywfnfqqop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: Execute Database Schema

1. Open your Supabase SQL Editor:
   - Go to: https://fnanqsllnsbywfnfqqop.supabase.co/project/fnanqsllnsbywfnfqqop/sql/new

2. Copy the entire contents of `supabase-schema.sql`

3. Paste into the SQL Editor and click **Run**

4. Wait for confirmation that all tables, policies, and functions were created successfully

### Step 4: Configure Authentication

1. Go to **Authentication** → **Providers** in your Supabase dashboard:
   - https://fnanqsllnsbywfnfqqop.supabase.co/project/fnanqsllnsbywfnfqqop/auth/providers

2. **Enable Google OAuth:**
   - Toggle ON "Google"
   - Add your Google Client ID and Secret
   - Add authorized redirect URL: `https://fnanqsllnsbywfnfqqop.supabase.co/auth/v1/callback`

3. **Enable Email (Magic Link):**
   - This should already be enabled by default
   - Ensure "Enable Email Confirmations" is ON

### Step 5: Configure Email Templates (Optional but Recommended)

1. Go to **Authentication** → **Email Templates**
2. Customize the templates for:
   - Confirmation email
   - Magic Link
   - Password reset

## 📊 Database Schema Overview

### Tables Created:

1. **users** - User profiles (extends auth.users)
   - id, email, full_name, avatar_url, created_at, updated_at

2. **credits** - Credit balance tracking
   - user_id, balance, lifetime_credits, last_updated

3. **subscriptions** - Plan management
   - user_id, plan_type (free/pro), status, price, billing cycles

4. **usage_history** - Processing operations log
   - user_id, operation_type, credits_used, file_size, processing_time

5. **favorites** - Saved processed images
   - user_id, operation_type, image URLs, title, notes

6. **download_history** - Download tracking
   - user_id, operation_type, file details, downloaded_at

### Security Features:

- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Users can only access their own data
- ✅ Secure database functions for credit operations
- ✅ Automatic user profile creation on signup

### Database Functions:

- `handle_new_user()` - Auto-creates profile + 1 free credit on signup
- `consume_credit()` - Safely deduct credits with validation
- `get_user_credits()` - Get current credit balance
- `add_credits()` - Add credits (for purchases/promos)
- `update_subscription()` - Change user plan

## 🧪 Testing

### 1. Verify Tables

Go to **Table Editor** in Supabase dashboard and confirm you see:
- ✅ users
- ✅ credits
- ✅ subscriptions
- ✅ usage_history
- ✅ favorites
- ✅ download_history

### 2. Test Database Functions

In Supabase SQL Editor, run:

```sql
-- Check if functions exist
SELECT routine_name 
FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_name IN ('handle_new_user', 'consume_credit', 'get_user_credits', 'add_credits', 'update_subscription');
```

Should return 5 rows.

### 3. Test RLS Policies

```sql
-- Check RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';
```

All tables should show `rowsecurity = true`.

### 4. Test Connection in App

```bash
npm run dev
```

Open browser console and look for Supabase connection errors. No errors = successful setup!

## 🔧 Usage Examples

### In Your Components:

```typescript
import { supabase, getUserCredits, consumeCredit, addToFavorites } from '@/lib/supabase'

// Get current user
const { data: { user } } = await supabase.auth.getUser()

// Check credits
const credits = await getUserCredits(user?.id)

// Use a credit
const success = await consumeCredit(user?.id, 'watermark_removal')

// Add to favorites
await addToFavorites(
    user?.id,
    'watermark_removal',
    processedImageUrl,
    originalImageUrl,
    'My favorite edit'
)
```

## 🎯 Next Steps

After database setup is complete, you'll need to:

1. **Migrate from localStorage to Supabase** in these components:
   - `Header.tsx` - Replace localStorage credits with Supabase
   - `ImageUploader.tsx` - Use Supabase for credit consumption
   - `AuthPopup.tsx` - Integrate Supabase Auth
   - `account/page.tsx` - Fetch data from Supabase

2. **Add authentication context** to manage user state globally

3. **Test the complete flow:**
   - Sign up with Google
   - Sign up with Email
   - Process an image
   - Check credit balance
   - Add to favorites
   - View download history

## 🆘 Troubleshooting

### Issue: Tables not created
- Make sure you ran the entire SQL script
- Check for errors in the SQL output

### Issue: RLS blocking access
- Verify user is authenticated: `supabase.auth.getUser()`
- Check RLS policies in Table Editor → Select table → RLS tab

### Issue: Functions not working
- Verify functions exist in Database → Functions
- Check function permissions (should be SECURITY DEFINER)

### Issue: Auth not working
- Verify OAuth credentials are correct
- Check redirect URLs match your domain
- Ensure email templates are configured

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Google OAuth Setup](https://supabase.com/docs/guides/auth/social-login/auth-google)
