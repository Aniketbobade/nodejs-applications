const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/generate-pdf', (req, res) => {
  const { studentName, schoolName, email } = req.body;

  const doc = new PDFDocument();

  // Pipe the PDF to the response
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="student_id_card.pdf"`);
  doc.pipe(res);

  // Set font and font size
  doc.font('Helvetica-Bold');
  doc.fontSize(18);

  // Draw a rectangle for the card
  doc.rect(40, 40, 400, 250).fill('#f0f0f0');

  // Add the card title
  doc.fillColor('#000000').text('Student ID Card', 50, 50);

  // Add school name
  doc.fillColor('#000000').text('School Name:', 50, 100);
  doc.fillColor('#007BFF').text(schoolName, 200, 100);

  // Add student name
  doc.fillColor('#000000').text('Student Name:', 50, 150);
  doc.fillColor('#007BFF').text(studentName, 200, 150);

  // Add email
  doc.fillColor('#000000').text('Email:', 50, 200);
  doc.fillColor('#007BFF').text(email, 200, 200);

  // End the document
  doc.end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} !`);
});
