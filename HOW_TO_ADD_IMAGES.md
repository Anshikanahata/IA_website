# How to Add Your Logo and Modern India Images

## 📁 Folder Structure
Place all your images in the `/public` folder at the root of your project.

## 🎨 Adding Your Logo

1. **Prepare your logo file:**
   - Recommended formats: SVG (best), PNG, or JPG
   - Recommended size: 200x60px or similar aspect ratio
   - Name it: `logo.svg`, `logo.png`, or `logo.jpg`

2. **Place it in the public folder:**
   ```
   public/
     └── logo.svg  (or logo.png/logo.jpg)
   ```

3. **Update the logo path in Header.jsx** (if needed):
   - Open `src/components/Header.jsx`
   - Find line 19: `const logoPath = '/logo.svg'`
   - Change to `/logo.png` or `/logo.jpg` if using those formats

## 🏙️ Adding Modern India Images

1. **Prepare your images:**
   - Recommended formats: JPG, PNG, or WebP
   - Recommended dimensions: 1920x400px or similar wide format
   - Use 3-5 images showing modern India (airports, data centers, tech hubs, infrastructure, etc.)
   - **Avoid clichés** like Taj Mahal or elephants - focus on modern infrastructure

2. **Name your images:**
   ```
   public/
     ├── india-1.jpg
     ├── india-2.jpg
     ├── india-3.jpg
     ├── india-4.jpg
     └── india-5.jpg
   ```

3. **Update image filenames in Header.jsx** (if your filenames are different):
   - Open `src/components/Header.jsx`
   - Find lines 9-14 where `modernIndiaImages` array is defined
   - Update the filenames to match your actual image names

## ✅ Quick Checklist

- [ ] Logo file added to `/public` folder
- [ ] Logo filename matches the path in Header.jsx (line 19)
- [ ] 3-5 modern India images added to `/public` folder
- [ ] Image filenames match the array in Header.jsx (lines 9-14)
- [ ] Images show modern India (not clichés)

## 🎯 Example Image Ideas

Good examples of modern India visuals:
- ✈️ New airports (e.g., Delhi, Mumbai terminals)
- 🏢 Modern office buildings and tech parks
- 💻 Data centers and IT infrastructure
- 🚄 High-speed rail and metro systems
- 🏭 Modern manufacturing facilities
- 🌉 Infrastructure projects (bridges, highways)
- 📱 Digital India initiatives

## 🔍 Testing

After adding your images:
1. Save the files in the `/public` folder
2. The dev server should automatically reload
3. Check the header - you should see:
   - Your logo in the top left
   - Modern India images as a subtle background gallery across the header

If images don't appear:
- Check browser console for 404 errors
- Verify filenames match exactly (case-sensitive)
- Ensure images are in `/public` folder, not `/src`

