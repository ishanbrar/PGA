# The DFW Punjabi Golf Club Website

A modern, premium website for The DFW Punjabi Golf Club featuring sleek design, smooth animations, and comprehensive functionality.

## 🏌️ Features

### Core Pages
- **Home** - Hero section, features, testimonials, and call-to-action
- **About Us** - Club history, mission, values, and achievements
- **Meet the Board** - Executive board profiles and leadership information
- **Events** - Upcoming events, past events, and event registration
- **Schedule** - Event schedules and tournament information
- **Contact Us** - Contact forms, location info, and department contacts
- **Gallery** - Photo galleries with lightbox functionality
- **Members** - Membership information, benefits, and application process

### Premium Features
- ✨ **Modern Design** - Sleek, professional appearance with premium aesthetics
- 🎭 **Smooth Animations** - Framer Motion powered animations throughout
- 📱 **Responsive Design** - Fully optimized for desktop and mobile devices
- 🎨 **Custom Styling** - Tailwind CSS with custom color schemes and components
- 🔄 **Interactive Elements** - Hover effects, transitions, and micro-interactions
- 🚀 **Performance Optimized** - Fast loading and smooth user experience

## 🛠️ Technology Stack

- **Frontend Framework** - React 18 with TypeScript
- **Styling** - Tailwind CSS with custom components
- **Animations** - Framer Motion
- **Icons** - Lucide React
- **Routing** - React Router DOM
- **Build Tool** - Create React App

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dfw-punjabi-golf-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Board.tsx       # Board members page
│   ├── Events.tsx      # Events page
│   ├── Schedule.tsx    # Schedule page
│   ├── Contact.tsx     # Contact page
│   ├── Gallery.tsx     # Gallery page
│   └── Members.tsx     # Members page
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary** - Blue tones (#0ea5e9)
- **Golf** - Green tones (#22c55e)
- **Gold** - Accent colors (#f59e0b)
- **Neutral** - Gray scale for text and backgrounds

### Typography
- **Headings** - Playfair Display (serif)
- **Body Text** - Inter (sans-serif)

### Components
- **Buttons** - Primary and secondary button styles
- **Cards** - Consistent card layouts with shadows
- **Forms** - Styled form inputs and controls
- **Navigation** - Responsive navigation with mobile menu

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** - 1200px and above
- **Tablet** - 768px to 1199px
- **Mobile** - 320px to 767px

## 🎭 Animations

### Framer Motion Features
- **Page Transitions** - Smooth page-to-page navigation
- **Scroll Animations** - Elements animate as they come into view
- **Hover Effects** - Interactive hover states and micro-animations
- **Loading States** - Smooth loading and transition effects

### Animation Types
- Fade in/out
- Slide up/down
- Scale effects
- Floating animations
- Staggered animations

## 🔧 Customization

### Adding New Pages
1. Create a new component in the `src/pages/` directory
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Modifying Styles
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom CSS variables for consistent theming

### Updating Content
- Content is stored in component files
- Easy to modify text, images, and data
- Structured data arrays for easy maintenance

## 📸 Image Integration

The website uses placeholder images for demonstration. To integrate real images:

1. Replace placeholder URLs with actual image paths
2. Optimize images for web (recommended: WebP format)
3. Ensure proper alt text for accessibility

## 🚀 Deployment

### Build and Deploy
1. Run `npm run build`
2. Upload the `build/` folder to your hosting provider
3. Configure your domain and SSL certificate

### Recommended Hosting
- **Vercel** - Excellent for React apps
- **Netlify** - Great static site hosting
- **AWS S3** - Scalable cloud hosting
- **Traditional hosting** - Any web server supporting static files

## 📊 Performance

### Optimization Features
- **Code Splitting** - Automatic route-based code splitting
- **Lazy Loading** - Images and components load as needed
- **Minified Assets** - Production builds are optimized
- **Responsive Images** - Images scale appropriately for devices

### Performance Metrics
- **First Contentful Paint** - Optimized for fast initial rendering
- **Largest Contentful Paint** - Smooth loading of main content
- **Cumulative Layout Shift** - Minimal layout shifts during loading

## 🔒 Security

### Best Practices
- **HTTPS Only** - Secure connections for all content
- **Content Security Policy** - Protection against XSS attacks
- **Input Validation** - Form inputs are properly validated
- **Secure Headers** - Security headers for production deployment

## 📈 SEO Features

### Optimization
- **Meta Tags** - Proper title, description, and keywords
- **Semantic HTML** - Proper heading structure and semantic elements
- **Open Graph** - Social media sharing optimization
- **Structured Data** - Schema markup for better search results

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about the website:
- **Email** - info@dfwpunjabigolf.com
- **Phone** - (555) 123-4567
- **Website** - Visit our contact page

## 🙏 Acknowledgments

- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For utility-first styling
- **Lucide React** - For beautiful icons
- **React Community** - For the excellent framework

---

**The DFW Punjabi Golf Club** - Where tradition meets excellence on the green.
