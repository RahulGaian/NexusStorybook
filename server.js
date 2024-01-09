const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

// Use bodyParser middleware
app.use(bodyParser.json());

// Enable CORS with specific options
app.use(
  cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, headers, etc.)
  })
);

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Load existing data from data.json
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync('data.json'));
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  // Add new form data
  existingData.push(formData);

  // Save updated data to data.json
  fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

  res.status(200).json({ message: 'Form data saved successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
