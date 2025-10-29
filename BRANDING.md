# 🎨 Branding Guide

This guide will help you customize the Resume Builder with your own brand name and style.

## Quick Brand Name Change

### Step 1: Choose Your Brand Name
Examples: ResumeGenius, CVCraft, CareerBuilder, QuickResume, etc.

### Step 2: Find and Replace
Search for "HostedResume.com" and replace with your brand name in these files:
- `index.html` (3 occurrences)
- `builder.html` (1 occurrence)
- `README.md` (multiple occurrences)
- `package.json` (1 occurrence in name field)

### Step 3: Update Domain References
Replace "yourdomain.com" with your actual domain in:
- `robots.txt`
- `DEPLOYMENT.md`

## Customize Logo

### Option 1: Keep Emoji
Change the 📄 emoji in the navigation to something else:
- 🚀 (rocket)
- ⚡ (lightning)
- 💼 (briefcase)
- 📋 (clipboard)
- ✨ (sparkles)

### Option 2: Add Image Logo
Replace this in `index.html` and `builder.html`:
```html
<h1>📄 HostedResume.com</h1>
```

With:
```html
<img src="logo.png" alt="Your Brand" style="height: 40px;">
```

## Customize Colors

Edit `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #4F46E5;      /* Main brand color */
    --primary-dark: #4338CA;       /* Darker shade */
    --secondary-color: #10B981;    /* Accent color */
    --text-dark: #1F2937;          /* Dark text */
    --text-light: #6B7280;         /* Light text */
}
```

### Popular Color Schemes:

**Professional Blue:**
```css
--primary-color: #2563EB;
--primary-dark: #1E40AF;
--secondary-color: #3B82F6;
```

**Modern Purple:**
```css
--primary-color: #7C3AED;
--primary-dark: #6D28D9;
--secondary-color: #A78BFA;
```

**Fresh Green:**
```css
--primary-color: #059669;
--primary-dark: #047857;
--secondary-color: #10B981;
```

**Bold Orange:**
```css
--primary-color: #EA580C;
--primary-dark: #C2410C;
--secondary-color: #F97316;
```

## Customize Fonts

Add Google Fonts to `index.html` and `builder.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update `styles.css`:
```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## Add Favicon

1. Create or download a favicon (16x16 or 32x32 PNG)
2. Save as `favicon.ico` or `favicon.png`
3. Add to `<head>` in both HTML files:

```html
<link rel="icon" type="image/png" href="favicon.png">
```

## Update Meta Tags

In `index.html`, customize these for SEO:

```html
<title>Your Brand - Professional Resume Builder</title>
<meta name="description" content="Your custom description here">
<meta property="og:title" content="Your Brand - Resume Builder">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

## Customize Footer

Edit the footer in `index.html`:

```html
<div class="footer-section">
    <h3>Your Brand Name</h3>
    <p>Your custom tagline here</p>
</div>
```

Add social media links:
```html
<div class="footer-section">
    <h4>Follow Us</h4>
    <a href="https://twitter.com/yourbrand">Twitter</a>
    <a href="https://linkedin.com/company/yourbrand">LinkedIn</a>
    <a href="https://facebook.com/yourbrand">Facebook</a>
</div>
```

## Quick Checklist

Before launching with your brand:

- [ ] Replace "HostedResume.com" with your brand name
- [ ] Update domain references
- [ ] Customize colors in `styles.css`
- [ ] Add logo/favicon
- [ ] Update meta tags for SEO
- [ ] Customize footer content
- [ ] Update `package.json` author field
- [ ] Test on multiple devices
- [ ] Deploy to Vercel
- [ ] Connect custom domain

## Need Help?

- Color palette generator: [coolors.co](https://coolors.co)
- Free logos: [canva.com](https://canva.com)
- Free icons: [flaticon.com](https://flaticon.com)
- Google Fonts: [fonts.google.com](https://fonts.google.com)
- Favicon generator: [favicon.io](https://favicon.io)

---

**Pro Tip:** Keep your branding consistent across all pages and elements for a professional look!
