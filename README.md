# Professional Resume Builder

A modern, free resume builder that helps you create professional resumes in minutes. Built with vanilla JavaScript and optimized for Vercel deployment.

## 🚀 Features

- **Multiple Professional Templates** - Choose from Modern, Classic, or Minimal designs
- **Real-time Preview** - See your resume update as you type
- **PDF Export** - Download your resume as a high-quality PDF
- **Auto-Save** - Your work is automatically saved in your browser
- **100% Client-Side** - No backend required, all data stays in your browser
- **Mobile Responsive** - Works perfectly on all devices
- **Privacy First** - Your data never leaves your device

## 💰 Monetization Opportunities

This project is designed with monetization in mind:

### Current Features (Free Tier)
- Basic resume builder
- 3 professional templates
- PDF export
- Local storage auto-save

### Future Premium Features
- **AI-Powered Writing Assistant** (OpenAI integration)
  - Auto-generate professional summaries
  - Optimize bullet points for ATS
  - Tailor resume to job descriptions
  - Generate cover letters
  
- **Custom Domain Hosting**
  - Host resume at custom domain (e.g., yourname.com)
  - Professional online portfolio
  - Analytics tracking
  
- **Premium Templates**
  - Advanced designs
  - Industry-specific templates
  - Custom branding options
  
- **User Accounts** (Supabase integration)
  - Save multiple resume versions
  - Access from any device
  - Version history

### Suggested Pricing
- **Free**: Basic builder, PDF download, 3 templates
- **Premium ($9.99/mo)**: AI writing assistant, 10+ templates, custom subdomain
- **Pro ($19.99/mo)**: Everything + custom domain, analytics, priority support

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **PDF Generation**: jsPDF + html2canvas
- **Hosting**: Vercel (optimized for free tier)
- **Storage**: LocalStorage (client-side)

### Future Integrations
- **Supabase**: User authentication and database
- **OpenAI API**: AI-powered content generation
- **Stripe**: Payment processing for premium features

## 📦 Deployment to Vercel

### Quick Deploy

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts**:
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - Project name? (Press enter for default or type custom name)
   - Directory? ./
   - Override settings? No

4. **Production Deploy**:
```bash
vercel --prod
```

### Manual Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect settings
5. Click "Deploy"

### Custom Domain Setup

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., mobifastsites.com)
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4F46E5;
    --secondary-color: #10B981;
    /* ... */
}
```

### Add New Templates
1. Create new template styles in `builder.css`
2. Add template option in `builder.html`
3. Update template logic in `builder.js`

### Modify Resume Sections
Edit the `generateResumeHTML()` function in `builder.js`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

- All data stored locally in browser
- No server-side data collection
- No tracking or analytics (by default)
- HTTPS enforced via Vercel

## 📈 SEO Optimization

The site is optimized for search engines:
- Semantic HTML structure
- Meta descriptions
- Fast loading times
- Mobile-first design
- Clean URLs

## 🚀 Future Roadmap

### Phase 1 (Current - MVP)
- [x] Basic resume builder
- [x] PDF export
- [x] 3 templates
- [x] Auto-save
- [x] Responsive design

### Phase 2 (Backend Integration)
- [ ] Supabase authentication
- [ ] Cloud storage for resumes
- [ ] User dashboard
- [ ] Multiple resume versions

### Phase 3 (AI Features)
- [ ] OpenAI integration
- [ ] AI writing assistant
- [ ] Content optimization
- [ ] ATS scoring

### Phase 4 (Monetization)
- [ ] Stripe payment integration
- [ ] Premium templates marketplace
- [ ] Custom domain hosting
- [ ] Analytics dashboard

### Phase 5 (Advanced Features)
- [ ] Cover letter generator
- [ ] LinkedIn import
- [ ] Job application tracking
- [ ] Interview preparation tools

## 💡 Marketing Ideas

1. **SEO Content**
   - Blog posts about resume writing
   - Career advice articles
   - Industry-specific resume guides

2. **Social Media**
   - Share resume tips on LinkedIn
   - Before/after resume examples
   - Success stories

3. **Partnerships**
   - Career coaches
   - University career centers
   - Job boards

4. **Paid Advertising**
   - Google Ads (resume-related keywords)
   - LinkedIn Ads (job seekers)
   - Facebook/Instagram (career content)

## 📊 Analytics Setup (Optional)

To add Google Analytics:
1. Get your GA4 tracking ID
2. Add to `index.html` and `builder.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

## 📄 License

MIT License - Feel free to use this for your own projects

## 🎯 Getting Started

1. Clone or download this repository
2. Open `index.html` in a browser to test locally
3. Deploy to Vercel using the instructions above
4. Start building your resume business!

## 💬 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ for job seekers everywhere**

## 🎨 Branding

The site currently uses "ResumeBuilder" as a placeholder name. To customize with your own brand:

1. **Search and replace** "ResumeBuilder" with your brand name in:
   - `index.html`
   - `builder.html`
   - `README.md`
   - `package.json`

2. **Update the emoji/logo** (📄) in the navigation if desired

3. **Customize colors** in `styles.css` (see Customization section above)

4. **Add your logo** by replacing the text logo with an `<img>` tag

Ready to help people land their dream jobs! 🚀
