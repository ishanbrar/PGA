# Logo Files

This folder contains the logo files for the DFW Punjabi Golf Club website.

## Current Files

- `logo-main.png` - Main logo used in both the navigation bar and footer

## How to Replace with Your Actual Logo

### Option 1: Replace PNG File
1. **Keep the same filename** (`logo-main.png`)
2. **Replace the file** with your actual logo PNG
3. **Ensure the image is square** (recommended: 48x48px or larger)

### Option 2: Use Different File Format
1. **Delete the current PNG file**
2. **Add your logo file** with the name `logo-main.png` (or change the extension in the code)
3. **Update the component files** if using a different extension:

#### Update Navbar.tsx:
```tsx
<img 
  src="/images/logo/logo-main.jpg"  // Change .png to .jpg if needed
  alt="DFW Punjabi Golf Club Logo" 
  className="w-12 h-12 object-contain"
/>
```

#### Update Footer.tsx:
```tsx
<img 
  src="/images/logo/logo-main.jpg"  // Change .png to .jpg if needed
  alt="DFW Punjabi Golf Club Logo" 
  className="w-12 h-12 rounded-full object-cover"
/>
```

## Recommended Logo Specifications

- **Format**: PNG (preferred) or JPG
- **Size**: 48x48px minimum (96x96px or 144x144px recommended)
- **Background**: Transparent (PNG) or white background
- **Quality**: High resolution (96-144 DPI)
- **Shape**: Square (will be displayed as circle in footer)

## Current Implementation

Both the **navbar** and **footer** now use the same logo file (`logo-main.png`):
- **Navbar**: Logo displays as-is with hover rotation effect
- **Footer**: Logo is cropped to a circle with rounded corners

## Benefits

- **Consistent Branding**: Same logo across all locations
- **Easy Management**: Only one logo file to maintain
- **Professional Look**: Clean, unified appearance
- **Fast Loading**: Local file, no external dependencies

Replace the current `logo-main.png` with your actual club logo for a personalized look!
