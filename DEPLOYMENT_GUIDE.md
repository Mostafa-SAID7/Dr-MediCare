# Deployment Guide - Dr. MediCare

## Pre-Deployment Checklist

### 1. Code Quality
- [x] All TypeScript errors resolved
- [x] ESLint warnings addressed
- [x] No console.log statements (except error/warn)
- [x] All components optimized with memo/useMemo/useCallback
- [x] Images optimized with Next.js Image component

### 2. Performance Optimizations
- [x] Bundle splitting configured
- [x] Lazy loading implemented for modals
- [x] Font loading optimized
- [x] Analytics deferred to lazyOnload
- [x] CSS optimizations applied
- [x] Component memoization complete

### 3. Security
- [x] Environment variables configured
- [x] Security headers in vercel.json
- [x] No sensitive data in client code
- [x] HTTPS enforced
- [x] XSS protection enabled

### 4. SEO
- [x] Meta tags configured
- [x] Open Graph tags added
- [x] Twitter Card tags added
- [x] Sitemap.xml configured
- [x] Robots.txt configured
- [x] Structured data (JSON-LD) added

## Deployment Steps

### Option 1: Vercel (Recommended)

#### Initial Setup
1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to Production**
   ```bash
   cd Dr-MediCare
   vercel --prod
   ```

#### Automatic Deployment (GitHub Integration)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install --legacy-peer-deps`

4. Set Environment Variables in Vercel Dashboard:
   ```
   NEXT_PUBLIC_GA_ID=G-SYBLJRT13F
   NODE_ENV=production
   ```

5. Deploy automatically on push to main branch

### Option 2: Manual Build

#### Build for Production
```bash
# Install dependencies
npm install --legacy-peer-deps

# Build the application
npm run build

# Test production build locally
npm start
```

#### Build Output
- Static files: `.next/static/`
- Server files: `.next/server/`
- Public assets: `public/`

## Post-Deployment Verification

### 1. Functionality Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Doctor search and filtering functional
- [ ] Appointment booking flow works
- [ ] Contact form submits successfully
- [ ] Patient portal accessible
- [ ] All modals open and close properly

### 2. Performance Testing

#### Run Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit (replace URL with your deployed site)
lighthouse https://dr-medicare.vercel.app --view
```

#### Expected Scores
- Performance: >75/100
- Accessibility: >87/100
- Best Practices: 100/100
- SEO: 100/100

#### Key Metrics Targets
- First Contentful Paint (FCP): <1.5s
- Largest Contentful Paint (LCP): <2.5s
- Total Blocking Time (TBT): <200ms
- Cumulative Layout Shift (CLS): <0.1
- Speed Index: <3.0s

### 3. Cross-Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 4. Responsive Testing
Test on:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Large Mobile (414x896)

### 5. SEO Verification
- [ ] Google Search Console verification
- [ ] Sitemap submitted to Google
- [ ] Meta tags rendering correctly
- [ ] Open Graph preview working
- [ ] Structured data valid (test with Google Rich Results Test)

## Monitoring Setup

### 1. Vercel Analytics
Enable in Vercel Dashboard:
- Real User Monitoring (RUM)
- Web Vitals tracking
- Error tracking

### 2. Google Analytics
Verify tracking:
```javascript
// Check if GA is loaded
console.log(window.gtag)
```

### 3. Performance Monitoring
Set up alerts for:
- LCP > 2.5s
- FID > 100ms
- CLS > 0.1
- Error rate > 1%

## Optimization Recommendations

### Immediate Actions
1. **Enable Vercel Analytics** for real-user monitoring
2. **Set up error tracking** (Sentry or similar)
3. **Configure CDN** for static assets
4. **Enable compression** (Brotli/Gzip)

### Short-term (1-2 weeks)
1. **Monitor Core Web Vitals** and optimize bottlenecks
2. **A/B test** critical user flows
3. **Optimize images** further based on usage data
4. **Review and optimize** slow API calls

### Long-term (1-3 months)
1. **Implement Service Worker** for offline support
2. **Add Progressive Web App (PWA)** features
3. **Optimize database queries** if applicable
4. **Consider edge caching** for dynamic content

## Rollback Procedure

### Vercel Rollback
1. Go to Vercel Dashboard
2. Navigate to Deployments
3. Find previous working deployment
4. Click "Promote to Production"

### Manual Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

## Performance Budget

### JavaScript Budget
- Initial Bundle: <200KB (gzipped)
- Total JavaScript: <500KB (gzipped)
- Per Route: <150KB (gzipped)

### Image Budget
- Hero Images: <100KB
- Thumbnails: <20KB
- Icons: <5KB

### CSS Budget
- Total CSS: <50KB (gzipped)
- Critical CSS: <14KB (inline)

## Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Performance Issues
1. Check Lighthouse report
2. Review Network tab in DevTools
3. Analyze bundle size with `npm run analyze`
4. Check for memory leaks in React DevTools

### Deployment Issues
1. Verify environment variables
2. Check build logs in Vercel
3. Test production build locally
4. Review Vercel function logs

## Support Contacts

### Technical Support
- Email: support@medicare.com
- Phone: (555) 123-4567

### Emergency Contacts
- On-call Developer: [Your Contact]
- DevOps Team: [Team Contact]

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)

---

**Last Updated**: March 3, 2026
**Version**: 2.0
**Deployment Status**: Ready for Production ✅
