# DFW Punjabi Golf Club - Admin Guide

## 🚀 Quick Start

### Accessing the Admin Panel
1. Navigate to `/admin` on your website
2. Use the demo credentials:
   - **Username:** `admin`
   - **Password:** `golfclub2024`

## 📝 Content Management System

### Overview
The website now includes a comprehensive admin system that allows non-technical users to easily edit:
- **Text content** across all pages
- **Images** with categories and descriptions
- **Page-specific content** organized by sections

### Features

#### 🔐 Secure Authentication
- Protected admin routes
- Session management
- Secure login system

#### ✏️ Content Editing
- **Inline editing** - Edit content directly on the website
- **Bulk editing** - Manage all content from the admin dashboard
- **Real-time updates** - See changes immediately
- **Version control** - Track content changes

#### 🖼️ Image Management
- **Upload new images** with drag & drop
- **Categorize images** (Background, Events, Gallery, Team)
- **Assign to pages** (Home, About, Gallery, Events)
- **Edit descriptions** and metadata
- **Delete images** with confirmation

#### 📱 User Experience
- **Responsive design** - Works on all devices
- **Intuitive interface** - No technical knowledge required
- **Preview functionality** - See changes before publishing
- **Search and filter** - Find content quickly

## 🛠️ How to Use

### Editing Text Content

#### Method 1: Inline Editing (Recommended)
1. **Navigate to any page** on the website
2. **Hover over text content** - An edit button will appear
3. **Click the edit button** (pencil icon)
4. **Make your changes** in the text area
5. **Click the green checkmark** to save or red X to cancel

#### Method 2: Admin Dashboard
1. **Go to `/admin`** and log in
2. **Click "Content Management"** tab
3. **Find the content section** you want to edit
4. **Click "Edit"** button
5. **Make changes** and click "Save Changes"

### Managing Images

#### Uploading New Images
1. **Go to Admin Dashboard** → "Image Management" tab
2. **Click "Upload New Image"**
3. **Select an image file** (JPG, PNG, GIF supported)
4. **Choose a category** (Background, Events, Gallery, Team)
5. **Select the page** where the image will be used
6. **Click "Upload"**

#### Editing Image Details
1. **Find the image** in the Image Management tab
2. **Click the edit button** (pencil icon)
3. **Update:**
   - Image description (alt text)
   - Category
   - Page assignment
4. **Click "Save"**

#### Deleting Images
1. **Find the image** you want to delete
2. **Click the red trash icon**
3. **Confirm deletion**

### Content Organization

#### Content Sections
Content is organized by:
- **Page** (Home, About, Board, Events, Schedule, Contact, Gallery, Members)
- **Section** (Hero, Mission, Vision, History, etc.)

#### Common Content IDs
- `hero-title` - Main page title
- `hero-subtitle` - Page subtitle
- `about-mission` - Mission statement
- `about-vision` - Vision statement
- `contact-address` - Club address
- `contact-phone` - Phone number
- `contact-email` - Email address

## 🎨 Customization Options

### Adding New Content Sections
1. **Edit the ContentContext** (`src/contexts/ContentContext.tsx`)
2. **Add new content sections** to the `defaultContent` array
3. **Use the ContentEditor component** on your pages

### Styling Content
- **Use Tailwind CSS classes** for styling
- **Apply custom CSS** in `src/index.css`
- **Responsive design** is built-in

### Image Optimization
- **Recommended formats:** JPG for photos, PNG for graphics
- **Optimal sizes:** 
  - Hero images: 1920x1080px
  - Gallery images: 800x600px
  - Thumbnails: 400x300px
- **File size:** Keep under 2MB for web performance

## 🔒 Security Considerations

### Production Deployment
- **Change default credentials** immediately
- **Implement HTTPS** for secure connections
- **Use environment variables** for sensitive data
- **Regular security updates** for dependencies

### User Management
- **Limit admin access** to trusted users only
- **Implement role-based permissions** if needed
- **Monitor admin activities** and changes

### Data Backup
- **Regular backups** of content and images
- **Version control** for content changes
- **Export functionality** for content migration

## 🚀 Advanced Features

### API Integration
The system is designed to easily integrate with:
- **Headless CMS** (Strapi, Contentful)
- **Database systems** (PostgreSQL, MongoDB)
- **Cloud storage** (AWS S3, Google Cloud Storage)
- **CDN services** for image delivery

### Custom Fields
Add custom content fields by:
1. **Extending the ContentSection interface**
2. **Adding new input types** to the admin dashboard
3. **Creating custom validation** rules

### Workflow Management
- **Content approval** workflows
- **Scheduled publishing** of content
- **Multi-language support** for international audiences
- **A/B testing** for content optimization

## 📱 Mobile Admin Access

### Responsive Design
- **Mobile-optimized** admin interface
- **Touch-friendly** controls and buttons
- **Responsive tables** and forms
- **Mobile image upload** support

### Mobile-Specific Features
- **Camera integration** for photo uploads
- **Touch gestures** for navigation
- **Optimized layouts** for small screens

## 🆘 Troubleshooting

### Common Issues

#### Content Not Updating
- **Refresh the page** to see changes
- **Check browser cache** settings
- **Verify content ID** matches exactly

#### Images Not Loading
- **Check file format** (JPG, PNG, GIF)
- **Verify file size** (under 2MB)
- **Check image permissions** and access

#### Admin Access Issues
- **Verify credentials** are correct
- **Clear browser cookies** and cache
- **Check network connectivity**

### Performance Optimization
- **Image compression** for faster loading
- **Lazy loading** for gallery images
- **CDN integration** for global access
- **Caching strategies** for content

## 📞 Support

### Getting Help
- **Check this guide** for common solutions
- **Review error messages** in browser console
- **Contact development team** for technical issues

### Feature Requests
- **Submit enhancement requests** through proper channels
- **Provide detailed descriptions** of desired features
- **Include use cases** and examples

---

## 🎯 Quick Reference

| Action | Location | Steps |
|--------|----------|-------|
| Edit text | Any page | Hover → Click edit button → Make changes → Save |
| Upload image | Admin → Images | Click Upload → Select file → Choose category → Upload |
| Manage content | Admin → Content | Find section → Click Edit → Update → Save Changes |
| Change settings | Admin → Settings | Configure website options and preferences |
| User management | Admin → Users | Manage admin users and permissions |

---

**Last Updated:** August 2024  
**Version:** 1.0.0  
**Maintained by:** Development Team
