const express = require('express');
const bodyParser = require('body-parser');
const forge = require('node-forge');
const fs = require('fs');
const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Webhook listener endpoint
app.post('/webhook', (req, res) => {
  const event = req.body;

  // Log the event
  console.log('Received event:', event);

  // Respond with 200 status code
  res.status(200).send('Webhook received');
});

// Start the server on port 443
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Webhook server is listening on port ${PORT}`);
});
