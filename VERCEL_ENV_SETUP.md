# Vercel Environment Variables Setup

## Problem
The contact form is showing: "Failed to send message. Email service is not configured. Please contact us directly."

## Root Cause
Environment variables from `.env.local` are NOT automatically deployed to Vercel. They need to be manually configured in the Vercel dashboard.

## Solution

### Step 1: Navigate to Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project: `ac-nova-technologies`
3. Click on **Settings** tab
4. Go to **Environment Variables** section

### Step 2: Add Required Environment Variables

Add the following environment variables in Vercel:

```
NEXT_PUBLIC_API_URL=https://ac-nova-technologies-9vuecvny-rajput-atuls-projects.vercel.app
NEXT_PUBLIC_SITE_URL=https://acnovatech.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=atulchauhan223222@gmail.com
SMTP_PASS=zjpnudgfmwmnojyd
ADMIN_EMAIL=atulchauhan223222@gmail.com
```

**Important Notes:**
- Replace `NEXT_PUBLIC_SITE_URL` with your actual production domain (acnovatech.com)
- Replace `NEXT_PUBLIC_API_URL` with your actual Vercel deployment URL
- The SMTP credentials should already exist in your `.env.local` file
- Select **Production**, **Preview**, and **Development** environments when adding variables

### Step 3: Redeploy

After adding environment variables:

**Option A: Trigger new deployment**
```bash
# Push any commit or use Vercel CLI
vercel --prod
```

**Option B: From Vercel Dashboard**
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Or push a new commit to trigger automatic deployment

### Step 4: Verify

After deployment completes:
1. Visit your production site
2. Test the contact form
3. Check that emails are being sent

## Gmail SMTP Configuration Check

Ensure you're using a **Gmail App Password** (not your regular password):

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** if not already enabled
3. Go to **App Passwords** (requires 2FA)
4. Select **Mail** and **Windows Computer**
5. Copy the generated 16-character password
6. Use this as `SMTP_PASS` in Vercel

## Troubleshooting

### If emails still don't send:
- Check Vercel Function Logs in the dashboard
- Look for SMTP connection errors
- Verify Gmail App Password is correct
- Ensure 2FA is enabled on your Google account

### Check Vercel Logs:
1. Go to Vercel Dashboard > your project
2. Click **Logs** tab
3. Select **Functions** 
4. Look for errors in `/api/contact` route

## Security Warning
Never commit these credentials to Git. Always use Vercel's environment variables for production.