# How to Add PDF Files

## Adding the Export Potential PDF

To display the **"India's Rising Export Potential"** report on your website, please follow these steps:

1. **Add the PDF file** to this `public` folder with the exact filename:
   ```
   Indias-Rising-Export-Potential-Final_251008_200954.pdf
   ```

2. The file will be automatically accessible at:
   ```
   /Indias-Rising-Export-Potential-Final_251008_200954.pdf
   ```

3. The Media page is already configured to link to this PDF. When users click on the "India's Rising Export Potential" card in either:
   - The **Knowledge Hub** (on homepage)
   - The **Media page** (`/insights/media`)
   
   They will be directed to the Media page where they can download or view the PDF.

## Adding More PDFs

To add additional PDF reports or white papers:

1. Place the PDF file in this `public` folder
2. Add a new entry in `src/components/pages/Media.jsx` in the `mediaItems` array
3. Set the `category` to `"white-paper"` for reports
4. Set the `link` to `/your-filename.pdf`

Example:
```javascript
{
  year: "2024",
  month: "OCT",
  title: "Your Report Title",
  description: "Description of your report...",
  source: "India Avenue Research",
  link: "/your-filename.pdf",
  category: "white-paper",
  readingTime: "Download PDF",
  tags: ["Research", "Tag1", "Tag2"]
}
```

## Current Media Items

The following media items have been added and are ready to display:

1. **India's Market and Global Opportunities** (Ausbiz Video)
   - Link: https://ausbiz.com.au/media/indias-market-and-global-opportunities?videoId=38476
   - Category: Video
   
2. **India Avenue Market Insights** (YouTube Video)
   - Link: https://www.youtube.com/watch?v=6yjlaM5XWKA
   - Category: Video
   
3. **India's Rising Export Potential** (PDF Report)
   - File: Indias-Rising-Export-Potential-Final_251008_200954.pdf
   - Category: White Paper
   - **⚠️ Please add this PDF file to the public folder**

