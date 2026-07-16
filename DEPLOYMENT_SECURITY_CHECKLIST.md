# Security Deployment Checklist

## Pre-Deployment Security Verification

### ✅ Code Security Review
- [x] No hardcoded credentials in source code
- [x] No PII in console logs
- [x] No debug statements exposed
- [x] XSS protection enabled (HTML escaping)
- [x] Input validation on all forms
- [x] SMTP TLS verification enabled

### ✅ API Security
- [x] CORS whitelist configured (not wildcard)
- [x] Rate limiting per endpoint
- [x] Payload size limits (10KB)
- [x] Error messages don't expose stack traces
- [x] Email validation and sanitization
- [x] Phone number pattern validation

### ✅ Frontend Security
- [x] Content Security Policy headers
- [x] X-Frame-Options SAMEORIGIN
- [x] X-Content-Type-Options nosniff
- [x] Strict image domain whitelist
- [x] Referrer Policy configured
- [x] Permissions Policy restrictive

### ✅ Backend Security
- [x] Helmet.js security middleware
- [x] CORS whitelist (not wildcard)
- [x] Express rate limiting
- [x] Payload size limits
- [x] HTTPS enforced (HSTS ready)
- [x] TLS certificate validation

### ✅ Environment Configuration
- [x] `.env.example` created with safe defaults
- [x] `.gitignore` prevents credential leaks
- [x] No secrets in git history
- [x] SMTP credentials in environment variables
- [x] Admin email configurable

## Production Deployment Steps

### 1. Pre-Deployment (Staging)
```bash
# Install dependencies
npm install --production
cd backend && npm install --production && cd ..

# Run production build
npm run build

# Test forms with SMTP configured
NODE_ENV=production npm start
```

### 2. Environment Configuration
```bash
# Set production environment variables
export NEXT_PUBLIC_SITE_URL=https://yourdomain.com
export NEXT_PUBLIC_API_URL=https://api.yourdomain.com
export SMTP_HOST=smtp.gmail.com
export SMTP_PORT=587
export SMTP_USER=your-email@gmail.com
export SMTP_PASS=your-app-password  # Gmail App Password, not regular password
export ADMIN_EMAIL=admin@yourdomain.com
export FRONTEND_URL=https://yourdomain.com
```

### 3. HTTPS Configuration
- [ ] Obtain SSL certificate (Let's Encrypt recommended)
- [ ] Configure reverse proxy (nginx/apache) for HTTPS
- [ ] Test HTTPS connectivity
- [ ] Verify certificate validity

### 4. Enable HSTS Header
```javascript
// In next.config.js - uncomment only after HTTPS works
{
  key: 'Strict-Transport-Security',
  value: 'max-age=31536000; includeSubDomains; preload',
}
```

### 5. Update CORS Whitelist
```typescript
// In backend/src/index.ts
const allowedOrigins = [
  'https://yourdomain.com',
  'https://www.yourdomain.com',
  process.env.FRONTEND_URL,
];
```

### 6. Update CSP Header
```javascript
// In next.config.js - adjust if using external resources
'Content-Security-Policy': 
  "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; ..."
```

### 7. Security Headers Verification
```bash
# Test security headers
curl -I https://yourdomain.com

# Check with online tool
# https://securityheaders.com/?q=yourdomain.com
```

### 8. Performance & Monitoring
- [ ] Set up error logging (Sentry, LogRocket, etc.)
- [ ] Monitor API response times
- [ ] Set up alerts for rate limit violations
- [ ] Monitor SMTP delivery failures
- [ ] Track Core Web Vitals

### 9. Final Security Scan
```bash
# Audit dependencies
npm audit

# Check for vulnerabilities
npm audit --audit-level=high

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### 10. Post-Deployment Testing
- [ ] Test all forms (contact, quote, newsletter)
- [ ] Verify email delivery
- [ ] Check rate limiting (try 6+ requests in 1 hour)
- [ ] Verify CORS headers in DevTools
- [ ] Test with XSS payloads: `<script>alert('xss')</script>`
- [ ] Monitor first 24 hours for errors

## Security Testing Commands

### Test XSS Prevention
```bash
# These should be escaped in email, not executed
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"<script>alert(1)</script>","email":"test@test.com","phone":"1234567890","service":"test","message":"test message"}'
```

### Test Rate Limiting
```bash
# Should be blocked after 5 requests
for i in {1..10}; do
  curl -X POST http://localhost:3001/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","phone":"1234567890","service":"test","message":"test message"}' &
done
```

### Test CORS
```bash
# Should fail with origin not allowed
curl -X POST http://localhost:3001/api/contact \
  -H "Origin: https://evil.com" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"1234567890","service":"test","message":"test message"}'
```

## Monitoring & Maintenance

### Weekly
- [ ] Check error logs
- [ ] Monitor API performance
- [ ] Review rate limit statistics

### Monthly
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Review security headers score
- [ ] Update dependencies if necessary
- [ ] Check backup status

### Quarterly
- [ ] Security scan with OWASP ZAP or Burp
- [ ] Penetration testing
- [ ] Review access logs for suspicious activity
- [ ] Update security policies

## Rollback Plan

If issues occur:
1. Revert to last known good deployment
2. Check logs for error patterns
3. Fix and test in staging
4. Re-deploy with fixes
5. Monitor closely for 24 hours

## Contacts & Escalation

- **Security Issues:** Contact immediately
- **Bug Reports:** Log in issue tracker
- **Performance Issues:** Analyze metrics first
- **Deployment Coordinator:** [Add name/contact]

---

**Status:** Ready for Production ✅
**Last Review:** 2024
**Next Review:** After 3 months of production operation
