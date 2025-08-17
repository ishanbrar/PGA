# DFW PGA Content Upload Script

This script uploads comprehensive content to your Firebase Firestore database to populate the admin dashboard with all editable content fields.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd scripts
npm install
```

### 2. Get Firebase Service Account Key
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your **DFWPGA** project
3. Go to **Project Settings** (gear icon) → **Service Accounts**
4. Click **Generate New Private Key**
5. Download the JSON file and place it in the `scripts` directory
6. Update the path in `uploadContentToFirebase.js`:
   ```javascript
   const serviceAccount = require('./your-service-account-key.json');
   ```

### 3. Update Database URL
In `uploadContentToFirebase.js`, update the database URL to match your project:
```javascript
databaseURL: "https://dfwpga-default-rtdb.firebaseio.com" // Replace with your actual URL
```

### 4. Run the Script

#### Upload All Content (Default)
```bash
npm run upload
# or
node uploadContentToFirebase.js upload
```

#### Check Existing Content
```bash
npm run check
# or
node uploadContentToFirebase.js check
```

#### Clean Up Test Content
```bash
npm run cleanup
# or
node uploadContentToFirebase.js cleanup
```

## 📊 What Gets Uploaded

The script will create **100+ content fields** across all pages:

### 🏠 Home Page (25 fields)
- Hero section (title, subtitle, description, CTAs)
- Statistics (members, years, events, courses)
- Features (4 feature blocks with titles and descriptions)
- Events (3 upcoming events with dates and descriptions)

### ℹ️ About Page (20 fields)
- Hero section
- Mission & Vision statements
- Core Values (4 values with descriptions)
- Club Statistics (6 stats with numbers and labels)

### 👥 Members Page (20 fields)
- Hero section
- Membership types (3 types with prices and descriptions)
- Member benefits (3 benefit categories)

### 🏆 Board Page (6 fields)
- Hero section
- Leadership philosophy
- Board member information

### 📅 Schedule Page (4 fields)
- Hero section
- Event calendar information

### 📞 Contact Page (4 fields)
- Hero section
- Department contact information

### 🎉 Events Page (6 fields)
- Hero section
- Upcoming and past events sections

### 🖼️ Gallery Page (4 fields)
- Hero section
- Gallery categories and organization

## 🔍 Script Features

### Smart Upload
- **Skips existing content** - won't duplicate what's already there
- **Creates missing content** - adds all fields that don't exist
- **Preserves existing data** - won't overwrite your current content

### Comprehensive Coverage
- **100+ content fields** covering every section of your website
- **Organized by page and section** for easy management
- **Professional default content** that you can immediately edit

### Safety Features
- **Dry-run capability** with the `check` command
- **Cleanup tools** to remove test content
- **Error handling** for individual field failures
- **Progress tracking** with detailed logging

## 📝 Content Structure

Each content field includes:
```javascript
{
  contentId: "unique-identifier",
  title: "Human-readable title",
  content: "Default content text",
  page: "Page name (e.g., 'Home', 'About')",
  section: "Section name (e.g., 'Hero', 'Features')",
  language: "en",
  isPublished: true,
  version: 1,
  createdAt: "timestamp",
  lastModifiedAt: "timestamp",
  lastModifiedBy: "system-upload-script"
}
```

## 🛠️ Troubleshooting

### Common Issues

1. **Service Account Key Not Found**
   - Ensure the JSON file is in the correct location
   - Check the file path in the script

2. **Permission Denied**
   - Verify your service account has Firestore write permissions
   - Check Firebase security rules

3. **Database URL Mismatch**
   - Confirm the database URL matches your project
   - Check for typos in the URL

### Debug Mode
Add more logging by modifying the script:
```javascript
// Add this line for verbose logging
console.log('Processing:', { contentId, title, page, section });
```

## 🔄 After Upload

Once the script completes:

1. **Refresh your admin dashboard** - all content fields will now be editable
2. **Edit the default content** - customize text to match your club's information
3. **Upload images** - use the image management tab to add photos
4. **Test the site** - verify changes appear on your live website

## 📈 Expected Results

After running the script, you should see:
- **100+ new documents** in your Firestore `content` collection
- **Organized by page and section** for easy management
- **Professional default content** ready for customization
- **Full admin dashboard functionality** with all fields editable

## 🆘 Need Help?

If you encounter issues:
1. Check the console output for error messages
2. Verify your Firebase project configuration
3. Ensure your service account has proper permissions
4. Check that your database URL is correct

The script is designed to be safe and won't overwrite existing content, so you can run it multiple times if needed.
