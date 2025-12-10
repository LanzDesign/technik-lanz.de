# Performance Optimization Recommendations

## Current Performance Metrics

### Build Output (Gzipped)
- Main JavaScript: **113.42 kB**
- Main CSS: **10.27 kB**
- Chunk files: ~8 kB total
- HTML: **6.99 kB**

### Implemented Optimizations

✅ **DNS Prefetch & Preconnect**
- Added preconnect for Google Analytics and Facebook
- Reduces DNS lookup time for third-party scripts

✅ **Removed Unused Files**
- Deleted `not-used.css` (9 lines of unused code)

✅ **Code Minification**
- Production build automatically minifies all assets
- React Scripts handles bundling and optimization

✅ **Reduced Content**
- Shortened title tag (71 → 55 chars)
- Shortened meta description (177 → 118 chars)
- Minimized noscript content

## Further Optimization Opportunities

### 1. Image Optimization (High Impact)

**Logo Optimization**
- Current: `public/logo.png` (42 KB, 2000x1186px)
- Recommendation: Resize to max 800px width
- Expected savings: ~30 KB

```bash
# Using ImageMagick (install if needed)
convert public/logo.png -resize 800x -quality 85 public/logo-optimized.png

# Or use online tools:
# - TinyPNG (tinypng.com)
# - Squoosh (squoosh.app)
```

**Add WebP Format**
Create modern WebP versions for better compression:
```bash
convert public/logo.png -quality 80 public/logo.webp
```

### 2. Code Splitting (Medium Impact)

Split large route components to reduce initial bundle:

```javascript
// In App.js, replace direct imports with lazy loading
const Home = React.lazy(() => import('./components/Home'));
const Impressum = React.lazy(() => import('./components/Impressum'));
const Datenschutz = React.lazy(() => import('./components/Datenschutz'));
const AGB = React.lazy(() => import('./components/AGB'));

// Wrap Routes with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    {/* ... */}
  </Routes>
</Suspense>
```

Expected savings: 20-30 KB on initial load

### 3. Font Optimization (Low-Medium Impact)

If custom fonts are used:
- Use `font-display: swap` for faster rendering
- Preload critical fonts
- Subset fonts to include only needed characters

### 4. Third-Party Script Optimization (Medium Impact)

**Defer Non-Critical Scripts**
- Analytics can load after page interactive
- Facebook Pixel can be deferred

```html
<!-- Add defer attribute -->
<script defer src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 5. Service Worker / PWA (Medium Impact)

React Scripts includes Workbox by default. Enable it:

```javascript
// In src/index.js
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Change from unregister to register
serviceWorkerRegistration.register();
```

Benefits:
- Offline support
- Faster repeat visits
- Better mobile experience

### 6. CSS Optimization (Low Impact)

**Remove Unused CSS**
Use PurgeCSS with PostCSS:
```bash
npm install --save-dev @fullhuman/postcss-purgecss
```

**Inline Critical CSS**
Extract above-the-fold CSS and inline it in `<head>`

### 7. Lazy Loading Images (Medium Impact)

Add lazy loading to images in components:
```jsx
<img 
  src={logoImage} 
  alt="Technik-Lanz Logo" 
  loading="lazy"
  decoding="async"
/>
```

### 8. Bundle Analysis

Install and run bundle analyzer:
```bash
npm install --save-dev webpack-bundle-analyzer
npm install --save-dev cra-bundle-analyzer

# Analyze bundle
npx cra-bundle-analyzer
```

This shows exactly what's taking up space in your bundle.

## PageSpeed Insights Checklist

Test your site at: [pagespeed.web.dev](https://pagespeed.web.dev)

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### Performance Score Goals
- Mobile: > 90
- Desktop: > 95

### Common Issues to Address
- [ ] Properly size images
- [ ] Defer offscreen images
- [ ] Minimize main-thread work
- [ ] Reduce JavaScript execution time
- [ ] Eliminate render-blocking resources
- [ ] Serve images in next-gen formats (WebP, AVIF)
- [ ] Enable text compression (gzip/brotli)

## Server Configuration

### Enable Compression
Ensure your hosting enables gzip or brotli compression for:
- HTML
- CSS
- JavaScript
- JSON
- SVG

### Cache Headers
Set appropriate cache headers:
```
# Static assets (1 year)
Cache-Control: public, max-age=31536000, immutable

# HTML (no cache, must revalidate)
Cache-Control: no-cache, must-revalidate
```

### HTTP/2 or HTTP/3
Most modern hosts (Netlify, Vercel, Cloudflare Pages) enable this by default.

## Monitoring

Set up continuous monitoring:
- Google PageSpeed Insights API
- Lighthouse CI
- WebPageTest
- Google Search Console Core Web Vitals report

## Expected Results After Full Optimization

With all optimizations:
- Initial load: **< 1 second** on fast 3G
- Lighthouse score: **95+** (mobile/desktop)
- Total bundle: **< 150 KB** (uncompressed)
- Images: **< 50 KB** total

## Quick Wins (Do First)

1. ✅ Optimize logo image (30 KB savings)
2. ✅ Add lazy loading to images
3. ✅ Enable service worker
4. ✅ Add `defer` to analytics scripts
5. ✅ Set up code splitting for routes

These 5 steps alone can improve PageSpeed score by 10-20 points.
