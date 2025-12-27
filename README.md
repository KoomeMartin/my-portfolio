# Martin Koome - AI Engineer & Researcher Portfolio

<div align="center">
  <h3>🚀 Modern, Professional AI/ML Portfolio Website</h3>
  <p>Built with HTML, CSS, and JavaScript - Optimized for GitHub Pages</p>
</div>

---

## ✨ Features

### 🎨 **Design & UX**
- **Modern Dark Theme** - Professional AI/ML color palette (blues, purples, teals)
- **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion-inspired transitions and scroll effects
- **Particle Effects** - Dynamic background animations for visual engagement
- **Glassmorphism** - Modern frosted glass effects throughout

### 📱 **Sections**
1. **Hero Section** - Eye-catching introduction with CTAs and social links
2. **About Me** - Professional summary and core expertise
3. **Skills & Technologies** - 6 categorized skill sections with 40+ technologies
4. **Featured Projects** - 8 real-world AI/ML projects with problem-solution-impact framework
5. **Education & Achievements** - Timeline-based education and recognition showcase
6. **Contact Form** - Functional contact form with EmailJS integration

### ⚡ **Technical Features**
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Cards
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Performance** - Lazy loading images, CSS optimization, minimal JavaScript
- **Cross-browser** - Works on all modern browsers
- **Static Site** - No build process required for GitHub Pages

---

## 🚀 Quick Start

### **Option 1: View Locally**

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The site is fully functional locally.

### **Option 2: Deploy to GitHub Pages**

See **[GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)** for detailed step-by-step instructions.

**Quick Steps:**
1. Create a GitHub repository named `username.github.io`
2. Push all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io`

---

## 📂 Project Structure

```
your-repo/
├── index.html           # Main HTML file
├── style.css            # All styling and animations
├── script.js            # JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg           # Hero background
│   │   ├── about-bg.jpg          # About section background
│   │   ├── skills-graphic.jpg    # Skills section graphic
│   │   └── projects/             # Project images (8 images)
│   ├── icons/
│   │   └── favicon.svg           # Site favicon
│   └── Martin_Koome_CV.pdf       # Downloadable CV
├── README.md                      # This file
└── GITHUB_PAGES_DEPLOYMENT.md    # Detailed deployment guide
```

---

## 🛠️ Customization Guide

### **1. Add Your Profile Photo**

**To add your professional photo to the About section:**

1. Save your profile photo as `profile.jpg` (or any name) in `assets/images/` folder
2. Open `index.html` and find the About section profile photo area (around line 167)
3. Replace the placeholder with your image:

```html
<!-- BEFORE (Placeholder) -->
<div class="profile-placeholder">
    <svg viewBox="0 0 24 24">...</svg>
    <span>Your Profile Photo</span>
</div>

<!-- AFTER (Your Photo) -->
<img src="assets/images/profile.jpg" alt="Your Name" class="profile-image">
```

**Recommended photo specifications:**
- **Aspect Ratio**: Square (1:1) for best results
- **Minimum Size**: 600x600 pixels
- **Format**: JPG, PNG, or WebP
- **Style**: Professional headshot with good lighting
- **Background**: Clean, solid color or subtle gradient

### **2. Personal Information**

**Edit `index.html`:**

```html
<!-- Update name in Hero Section (line ~60) -->
<h1 class="hero-name">
    <span class="name-text gradient-text">Your Name</span>
</h1>

<!-- Update tagline (line ~63) -->
<p class="hero-tagline">Your Professional Title</p>

<!-- Update value proposition (line ~66) -->
<p class="hero-description">
    Your professional description...
</p>

<!-- Update social links (lines ~72-84) -->
<a href="https://linkedin.com/in/your-profile" ...>
<a href="mailto:your-email@domain.com" ...>
```

### **3. Update About Section**

**Edit the professional summary in `index.html` (starting around line 180):**

```html
<!-- Update professional summary -->
<p class="about-text">
    Your professional background...
</p>

<!-- Update expertise cards -->
<div class="expertise-card">
    <h4 class="expertise-title">Your Expertise Area</h4>
    <p class="expertise-text">Description...</p>
</div>
```

### **4. Skills**

**Edit `index.html` (Skills Section, around line 230):**

```html
<!-- Add/modify skill categories -->
<div class="skill-category card-hover">
    <div class="skill-icon" style="background: linear-gradient(...)">
        <!-- Icon SVG -->
    </div>
    <h3 class="skill-title">Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### **5. Projects**

**Edit `script.js` (lines 7-95):**

```javascript
const projects = [
    {
        name: 'Project Name',
        description: 'Brief description...',
        problem: 'The problem it solves...',
        solution: 'Your solution approach...',
        impact: 'The measurable impact...',
        techStack: ['Tech1', 'Tech2', 'Tech3'],
        image: 'assets/images/projects/your-image.jpg',
        demo: 'https://project-demo-url.com',
        github: 'https://github.com/username/repo' // Optional
    },
    // Add more projects...
];
```

**Add Project Images:**
1. Place project images in `assets/images/projects/`
2. Recommended size: 1280x720px (16:9 ratio)
3. Format: JPG or PNG
4. Optimize images before adding (use TinyPNG or similar)

### **6. Education**

**Edit `index.html` (Education Section, around line 450):**

```html
<div class="timeline-item card-hover">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <div>
                <h4 class="timeline-degree">Degree Name</h4>
                <p class="timeline-institution">Institution Name</p>
                <p class="timeline-location">Location</p>
            </div>
            <div class="timeline-period">
                Period
            </div>
        </div>
        <p class="timeline-details">Details...</p>
    </div>
</div>
```

### **7. Contact Form (EmailJS Setup)**

**Step 1: Sign up for EmailJS**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key

**Step 2: Update `script.js` (lines 370-374):**

```javascript
const serviceID = 'your_service_id';      // From EmailJS dashboard
const templateID = 'your_template_id';    // From EmailJS dashboard
const publicKey = 'your_public_key';      // From EmailJS dashboard
```

**Step 3: Add EmailJS Script to `index.html` (before closing `</body>`):**

```html
<!-- EmailJS SDK -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
    emailjs.init('YOUR_PUBLIC_KEY');
</script>

<!-- Your existing script.js -->
<script src="script.js"></script>
```

**Step 4: Uncomment EmailJS code in `script.js` (lines 380-387):**

```javascript
// Remove the simulated delay and uncomment:
const response = await emailjs.send(serviceID, templateID, {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'your-email@domain.com'
}, publicKey);
```

### **8. Replace CV**

1. Replace `assets/Martin_Koome_CV.pdf` with your own PDF
2. Keep the same filename OR update the link in `index.html`:

```html
<!-- Update CV link (around line 118) -->
<a href="assets/YOUR_CV_FILENAME.pdf" download class="btn btn-secondary">
```

### **9. Update Favicon**

Replace `assets/icons/favicon.svg` with your own favicon (SVG, PNG, or ICO format).

### **10. Color Customization**

**Edit `style.css` (CSS Variables, lines 15-30):**

```css
:root {
    /* Change these to customize your color palette */
    --color-blue: #3b82f6;          /* Primary blue */
    --color-purple: #9333ea;        /* Accent purple */
    --color-teal: #14b8a6;          /* Accent teal */
    /* ... more colors ... */
}
```

---

## 📊 SEO Optimization

### **Current SEO Features:**
- ✅ Semantic HTML structure
- ✅ Meta description and keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Alt text for all images
- ✅ Fast load times

### **Update SEO Meta Tags:**

**Edit `index.html` (lines 5-25):**

```html
<meta name="description" content="Your custom description (150-160 characters)">
<meta name="keywords" content="Your, Keywords, Here, Comma, Separated">

<!-- Open Graph -->
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your description...">
<meta property="og:image" content="URL to your OG image">

<!-- Twitter Card -->
<meta name="twitter:title" content="Your Name - Your Title">
<meta name="twitter:description" content="Your description...">
```

---

## 🔧 Troubleshooting

### **Images Not Loading**
- Check file paths are correct (`assets/images/...`)
- Ensure image files exist in the correct folders
- Verify image extensions match (`.jpg` vs `.jpeg`)
- Check for case sensitivity in filenames

### **Contact Form Not Working**
- Ensure EmailJS credentials are correctly configured
- Check browser console for JavaScript errors
- Verify EmailJS script is loaded before `script.js`
- Test EmailJS service status at [status.emailjs.com](https://status.emailjs.com)

### **CSS/JS Not Loading**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check file paths in `index.html`
- Ensure files are in the root directory
- Test in incognito/private mode

### **GitHub Pages 404 Error**
- Ensure repository name is `username.github.io`
- Check that `index.html` is in the root directory
- Wait a few minutes after pushing (GitHub Pages can take 5-10 minutes to build)
- Verify GitHub Pages is enabled in repository settings

---

## 🎯 Performance Optimization

### **Current Optimizations:**
- ✅ Lazy loading for images
- ✅ Minified animations (CSS-only where possible)
- ✅ Debounced scroll events
- ✅ Optimized particle count
- ✅ CSS Grid for layouts (faster than flexbox for complex layouts)

### **Further Improvements:**

**1. Compress Images:**
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target < 200KB per image
- Use WebP format for better compression

**2. Enable Caching:**
Add `.htaccess` file (if using Apache server):
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**3. Minify Files (for production):**
- CSS: Use [CSS Minifier](https://cssminifier.com/)
- JavaScript: Use [JavaScript Minifier](https://www.toptal.com/developers/javascript-minifier)

---

## ♿ Accessibility

### **Current Features:**
- ✅ Semantic HTML elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Sufficient color contrast (WCAG AA compliant)
- ✅ Focus indicators on interactive elements
- ✅ Alt text for all images

### **Test Accessibility:**
1. Use [WAVE Tool](https://wave.webaim.org/)
2. Test with screen reader (NVDA, JAWS, or VoiceOver)
3. Navigate using only keyboard (Tab, Enter, Space)
4. Test color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 🌐 Browser Compatibility

### **Tested & Supported:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### **Features Used:**
- CSS Grid & Flexbox
- CSS Variables
- CSS Animations
- Intersection Observer API (for scroll reveals)
- ES6+ JavaScript

---
## 📝 License

This portfolio template is free to use for personal and commercial projects. No attribution required, but appreciated!

---

## 🤝 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)
3. Open an issue on GitHub (if applicable)

---

## 🎉 Credits

**Built by:** Martin Koome  
**Technologies:** HTML5, CSS3, JavaScript (ES6+)  
**Icons:** Custom SVG icons  
**Fonts:** Inter (Google Fonts)  
**Inspiration:** Modern developer and research portfolios

---

<div align="center">
  <p><strong>Made with ❤️ for the AI/ML Community</strong></p>
  <p>© 2024 Martin Koome. All rights reserved.</p>
</div>