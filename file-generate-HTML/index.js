const express = require('express');
const puppeteer = require('puppeteer');
const htmlContent = require('./template');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/generate-pdf', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  // Set content of the page with the HTML content
  await page.setContent(htmlContent(firstName,lastName,email));

  // Generate the PDF
  const pdfBuffer = await page.pdf({ format: 'A4' });

  await browser.close();

  // Set headers for file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="generated_pdf.pdf"');

  // Send the PDF as the response
  res.send(pdfBuffer);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
