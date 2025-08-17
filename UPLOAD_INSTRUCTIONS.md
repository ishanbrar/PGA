# 🚀 Upload Content to Firebase - Quick Start

## What This Does
This script will upload **100+ content fields** to your Firebase database, making your admin dashboard fully functional with all editable content.

## 📋 Prerequisites
1. **Firebase Service Account Key** - Download from Firebase Console
2. **Node.js** - Already installed on your system

## 🔑 Step 1: Get Firebase Service Account Key
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your **DFWPGA** project
3. Click **Project Settings** (gear icon) → **Service Accounts**
4. Click **Generate New Private Key**
5. Download the JSON file
6. **Rename it to** `firebase-service-account.json`
7. **Place it in your project root** (same folder as `package.json`)

## 🔧 Step 2: Install Dependencies
```bash
npm install
```

## 🚀 Step 3: Run the Script

### Check Current Content (Safe - Read Only)
```bash
node uploadContent.js check
```

### Upload All Content (Creates new content)
```bash
node uploadContent.js upload
```

## 📊 What Gets Uploaded

### 🏠 Home Page (25 fields)
- Hero section, statistics, features, events

### ℹ️ About Page (20 fields)  
- Hero, mission, vision, values, statistics

### 👥 Members Page (20 fields)
- Hero, membership types, benefits

### 🏆 Board Page (6 fields)
- Hero, leadership, board info

### 📅 Schedule Page (4 fields)
- Hero, calendar info

### 📞 Contact Page (4 fields)
- Hero, department contacts

### 🎉 Events Page (6 fields)
- Hero, upcoming/past events

### 🖼️ Gallery Page (4 fields)
- Hero, gallery categories

## ✅ Expected Results
After running the script, you'll have:
- **100+ new documents** in your Firestore `content` collection
- **Fully functional admin dashboard** with all fields editable
- **Professional default content** ready for customization
- **Organized by page and section** for easy management

## 🛡️ Safety Features
- **Skips existing content** - won't duplicate what's already there
- **Preserves your data** - won't overwrite current content
- **Safe to run multiple times** - only adds missing fields

## 🔍 Troubleshooting

### "Service Account Key Not Found"
- Ensure `firebase-service-account.json` is in your project root
- Check the filename spelling

### "Permission Denied"
- Verify your service account has Firestore write permissions
- Check Firebase security rules

### "Database URL Mismatch"
- Update the database URL in `uploadContent.js` to match your project

## 🎯 After Upload
1. **Refresh your admin dashboard** - all content fields will now be editable
2. **Edit the default content** - customize text to match your club
3. **Upload images** - use the image management tab
4. **Test the site** - verify changes appear on your live website

## 📞 Need Help?
The script includes detailed logging - check the console output for any error messages. The script is designed to be safe and won't overwrite existing content.
