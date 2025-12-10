# SEO Configuration Guide

This document provides instructions for completing the SEO setup after deployment.

## ✅ Completed Changes

### 1. **On-Page SEO Optimizations**
- ✅ Title tag reduced from 71 to 55 characters
- ✅ Meta description reduced from 177 to 118 characters
- ✅ Removed duplicate H1 tags (changed second H1 to H2)
- ✅ Added aria-labels to social media links for accessibility

### 2. **Social Media Integration**
- ✅ Added Facebook link to footer
- ✅ Added Instagram link to footer
- ✅ Added YouTube link to footer
- ✅ Updated schema.org structured data with all social profiles

### 3. **Analytics & Tracking**
- ✅ Google Analytics 4 script added
- ✅ Facebook Pixel script added

## 📝 Required Configuration Steps

### Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Replace `G-XXXXXXXXXX` in `/public/index.html` (line 5 and 10) with your actual Measurement ID

```html
<!-- Before -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- After -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  gtag('config', 'G-ABC123XYZ');
</script>
```

### Facebook Pixel Setup

1. Create a Facebook Pixel at [facebook.com/business/tools/meta-pixel](https://www.facebook.com/business/tools/meta-pixel)
2. Get your Pixel ID (numeric value)
3. Replace `YOUR_PIXEL_ID` in `/public/index.html` (lines 23 and 28) with your actual Pixel ID

```html
<!-- Before -->
fbq('init', 'YOUR_PIXEL_ID');
<img ... src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>

<!-- After -->
fbq('init', '123456789012345');
<img ... src="https://www.facebook.com/tr?id=123456789012345&ev=PageView&noscript=1"/>
```

### Social Media Profile URLs

Update the placeholder URLs in `/src/App.js` with your actual social media profiles:

```javascript
// Facebook
https://facebook.com/techniklanz → https://facebook.com/your-actual-page

// Instagram  
https://instagram.com/technik.lanz → https://instagram.com/your-actual-profile

// YouTube
https://youtube.com/@techniklanz → https://youtube.com/@your-actual-channel
```

Also update these URLs in `/public/index.html` in the schema.org structured data (around line 123).

## 🚀 Server Configuration (Not in Code)

The following items require server/hosting configuration:

### HTTP/2+ Protocol
- Configure your web server (nginx, Apache, etc.) to use HTTP/2 or HTTP/3
- Most modern hosting platforms (Netlify, Vercel, Cloudflare Pages) enable HTTP/2 by default

### DMARC Record
Add a DMARC DNS TXT record for email security:
```
_dmarc.technik-lanz.de TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@technik-lanz.de"
```

## 📊 Performance Optimization Tips

### PageSpeed Insights
1. Test at [pagespeed.web.dev](https://pagespeed.web.dev)
2. Consider implementing:
   - Image optimization (WebP format)
   - Lazy loading for images
   - Code splitting for larger components
   - Service worker for caching

### File Size Optimization
Current build sizes:
- Main JS: 113.42 kB (gzipped)
- Main CSS: 10.27 kB (gzipped)

To further reduce:
- Use dynamic imports for routes
- Remove unused dependencies
- Optimize images and use modern formats

## 📱 Social Media Checklist

- [ ] Create Facebook Business Page
- [ ] Create Instagram Business Profile
- [ ] Create YouTube Channel
- [ ] Link all profiles to website
- [ ] Verify website ownership on each platform
- [ ] Set up Facebook Pixel events for conversions

## 🔍 Keywords in Use

Main keywords optimized in HTML tags:
- Webentwickler Offenburg
- Webentwicklung Lahr
- React Entwickler
- Django Entwickler
- Full-Stack Development

## ✨ Testing After Configuration

1. Test Analytics: Visit site and check Google Analytics Real-Time view
2. Test Facebook Pixel: Use Facebook Pixel Helper Chrome extension
3. Test Social Links: Click all footer social icons
4. Test SEO: Use tools like:
   - Google Search Console
   - Bing Webmaster Tools
   - Schema.org validator
   - Open Graph debugger (Facebook)
   - Twitter Card validator
