# LCP (Largest Contentful Paint) Optimization Guide

## Issue Identified
- **LCP Element**: `img.rounded-2xl.shadow-2xl` (hero image)
- **Initial LCP**: 157.97s (inflated due to background loading)
- **Target LCP**: <2.5s (Good), <4.0s (Needs Improvement)

## Optimizations Applied

### 1. Image Preloading
Added preload link in `app/layout.tsx`:
```html
<link 
  rel="preload" 
  as="image" 
  href="/modern-medical-consultation-sketch.png"
  fetchPriority="high"
/>
```

**Impact**: Tells browser to prioritize hero image download immediately.

### 2. Enhanced Image Component
Updated hero image in `app/page.tsx`:
```tsx
<Image
  src="/modern-medical-consultation-sketch.png"
  alt="Medical consultation"
  width={600}
  height={400}
  priority              // Next.js priority loading
  fetchPriority="high"  // Browser fetch priority
  quality={90}          // Increased quality for better visual
  loading="eager"       // Force eager loading
  placeholder="blur"    // Show blur placeholder
  blurDataURL="..."     // Inline blur data
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
  className="rounded-2xl shadow-2xl w-full h-full object-cover"
/>
```

**Impact**: 
- Prevents lazy loading
- Shows placeholder immediately
- Optimizes for different screen sizes

### 3. Background Placeholder
Added background color to image container:
```tsx
<div className="relative z-10 aspect-[3/2] bg-gradient-to-br from-primary/5 to-accent/5">
```

**Impact**: Reduces perceived loading time with colored background.

### 4. Image Configuration
Optimized `next.config.mjs`:
```javascript
images: {
  formats: ['image/avif', 'image/webp'],  // Modern formats
  loader: 'default',                       // Use Next.js optimizer
  minimumCacheTTL: 60,                    // Cache for 60 seconds
}
```

**Impact**: Serves optimized formats (AVIF/WebP) automatically.

## Testing Instructions

### 1. Clear Cache
```bash
# Clear browser cache
Ctrl+Shift+Delete (Chrome/Edge)
Cmd+Shift+Delete (Mac)
```

### 2. Test in Incognito Mode
- Open incognito/private window
- Disable all extensions
- Navigate to homepage
- Run Lighthouse audit

### 3. Lighthouse Audit
```bash
# Using Lighthouse CLI
lighthouse https://dr-medicare.vercel.app --view

# Or use Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Performance"
4. Click "Analyze page load"
```

### 4. Real User Monitoring
After deployment, monitor with:
- Vercel Analytics
- Google Analytics (Web Vitals)
- Chrome User Experience Report

## Expected Results

### Before Optimization
- LCP: 157.97s (background loading artifact)
- Image loading: Lazy loaded
- No preload hints

### After Optimization
- LCP: <2.5s (target)
- Image loading: Eager with preload
- Placeholder visible immediately
- Optimized format delivery (AVIF/WebP)

## Additional Recommendations

### 1. Image Optimization
If LCP is still slow, consider:
```bash
# Compress image further
npm install -g sharp-cli
sharp input.png -o output.png --quality 85 --webp

# Or use online tools
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)
```

### 2. CDN Configuration
Ensure Vercel CDN is properly configured:
- Images served from edge network
- Automatic format conversion
- Proper cache headers

### 3. Critical CSS
Inline critical CSS for above-the-fold content:
```tsx
<style dangerouslySetInnerHTML={{ __html: `
  .hero-section { /* critical styles */ }
`}} />
```

### 4. Font Loading
Already optimized with:
- `display: 'swap'`
- System font fallbacks
- Preconnect to Google Fonts

## Monitoring Checklist

- [ ] LCP < 2.5s in Lighthouse
- [ ] LCP < 2.5s in Field Data (75th percentile)
- [ ] Image loads within first 2 seconds
- [ ] No layout shift (CLS = 0)
- [ ] Placeholder visible immediately
- [ ] AVIF/WebP format served to supported browsers

## Troubleshooting

### Issue: LCP still high
**Solutions**:
1. Check network throttling in DevTools
2. Verify image is actually preloaded (Network tab)
3. Ensure no blocking scripts before image
4. Check if image is above the fold

### Issue: Image not loading
**Solutions**:
1. Verify image exists in `/public` folder
2. Check Next.js image optimization is enabled
3. Review browser console for errors
4. Verify image path is correct

### Issue: Wrong format served
**Solutions**:
1. Check browser support for AVIF/WebP
2. Verify Next.js image config
3. Clear Vercel cache
4. Redeploy application

## Performance Budget

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| LCP | <2.5s | TBD | 🎯 |
| FCP | <1.8s | TBD | 🎯 |
| CLS | <0.1 | 0.000 | ✅ |
| TBT | <200ms | TBD | 🎯 |
| SI | <3.4s | TBD | 🎯 |

## Resources

- [Web.dev LCP Guide](https://web.dev/lcp/)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Vercel Analytics](https://vercel.com/docs/analytics)

---

**Last Updated**: March 3, 2026
**Status**: Optimizations Applied ✅
**Next Review**: After deployment testing
