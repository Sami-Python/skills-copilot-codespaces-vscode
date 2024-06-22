// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the comments module
const comments = require('./comments');

// Use the comments module to get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});