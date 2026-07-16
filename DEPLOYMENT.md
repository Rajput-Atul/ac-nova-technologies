# Deployment Guide - AC Nova Technologies

## Pre-Deployment Checklist

### Security ✅
- [x] Favicon configured correctly
- [x] Security headers added to next.config.js
- [x] Environment variables secured (.env.local with placeholders)
- [x] .env.example created for reference
- [x] Unused dependencies removed (next-seo)
- [x] dangerouslySetInnerHTML usage sanitized (JSON.stringify in JsonLd)
- [x] No hardcoded credentials in codebase
- [x] CORS properly configured
- [x] Content Security Policy ready for production

### Code Quality ✅
- [x] ESLint checks passing
- [x] TypeScript compilation successful
- [x] Unused code removed
- [x] All imports are used
- [x] Production build passes

### Performance ✅
- [x] Image optimization enabled (WebP, AVIF formats)
- [x] Trailing slashes configured
- [x] Remote patterns properly scoped
- [x] Lazy loading for sections implemented

### SEO & Meta ✅
- [x] Metadata configured in layout.tsx
- [x] Favicon configured
- [x] Open Graph tags added
- [x] Twitter Card tags added
- [x] JSON-LD structured data implemented
- [x] robots.txt configured

## Environment Variables Required

### Production Setup
Set these environment variables in your hosting provider:

```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
ADMIN_EMAIL=your-admin-email@gmail.com
```

### Important: Generate Gmail App Password
1. Go to Google Account Security: https://myaccount.google.com/security
2. Enable 2-Step Verification if not already enabled
3. Go to App Passwords (requires 2FA)
4. Select Mail and Windows Computer
5. Use the generated 16-character password as SMTP_PASS

## Deployment Platforms

### Vercel (Recommended for Next.js)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ac-nova.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/import
   - Select your GitHub repository
   - Configure environment variables in Vercel dashboard
   - Deploy

3. **Custom Domain**
   - Go to Vercel Project Settings > Domains
   - Add your domain (e.g., acnovatech.com)
   - Update DNS records with Vercel instructions

### Netlify

1. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment variables**
   - Go to Site settings > Build & deploy > Environment
   - Add all required environment variables

3. **Deploy**
   - Connect GitHub repository
   - Trigger automatic deploys on push

### Traditional VPS/Server (AWS EC2, DigitalOcean, etc.)

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone and setup**
    ```bash
    git clone your-repo
    cd ac-nova-technologies
    npm install
    npm run build
    ```

3. **Run with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "ac-nova" -- start
   pm2 startup
   pm2 save
   ```

4. **Setup Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot certbot --nginx -d yourdomain.com
   ```

## Post-Deployment Testing

### Essential Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Email notifications sent to admin
- [ ] Dark/Light theme toggle works
- [ ] WhatsApp button opens correctly
- [ ] Logo displays in navbar and footer
- [ ] Favicon shows in browser tab
- [ ] 404 page works
- [ ] Images load from remote URLs
- [ ] Mobile responsive on all pages

### Security Tests
- [ ] Check Security Headers: https://securityheaders.com/?q=yourdomain.com
- [ ] SSL Certificate Valid: https://www.sslshowcase.com/
- [ ] No console errors in DevTools
- [ ] No mixed content (HTTP on HTTPS site)
- [ ] Environment variables not exposed in frontend code
- [ ] Sensitive data not logged in console

### Performance Tests
- [ ] Lighthouse Score: https://developers.google.com/web/tools/lighthouse
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Check Core Web Vitals
- [ ] Images optimized and loading fast

### SEO Tests
- [ ] Google Search Console Setup: https://search.google.com/search-console/
- [ ] XML Sitemap accessible: /sitemap.xml
- [ ] robots.txt accessible: /robots.txt
- [ ] Open Graph tags in HTML (check Facebook debugger)
- [ ] Schema.org structured data valid
- [ ] Meta description showing in search results

## Monitoring & Maintenance

### Setup Monitoring
1. **Vercel Analytics**
   - Automatically included with Vercel deployment
   - Monitor at Vercel dashboard

2. **Google Analytics**
   ```typescript
   // Add to layout.tsx if needed
   <script async src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}></script>
   ```

3. **Error Tracking**
   - Consider Sentry.io for production error tracking
   - https://sentry.io/

### Regular Updates
- [ ] Keep dependencies updated: `npm update`
- [ ] Security patches: `npm audit fix`
- [ ] Monitor performance metrics monthly
- [ ] Review and update content regularly
- [ ] Backup database/static files

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### Logo not showing
- Ensure `/public/logo.png` exists
- Check Image dimensions (350px x 200px)
- Verify Next.js Image component usage

### Favicon not showing
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `/public/favicon.ico` exists
- Hard refresh: Ctrl+F5 (or Cmd+Shift+R on Mac)

### Email not sending
- Verify SMTP credentials
- Check Gmail security settings
- Ensure App Password used (not account password)
- Check SMTP_PORT is 587

### Environment variables not working
- Verify variables prefixed with `NEXT_PUBLIC_` for client-side
- Rebuild after changing env vars
- Check variable names exactly match code

## Support & Documentation

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Node.js: https://nodejs.org/docs/
