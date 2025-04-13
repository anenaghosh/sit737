
// Import express module
const express = require('express');
const app = express();

// Set the port number
const port = process.env.PORT || 80;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is the updated version of your Node.js app running in Kubernetes!');
});

// Define a health check route for readiness/liveness probes
app.get('/health', (req, res) => {
  res.status(200).send('App is running smoothly!');
});

// Add a new route to serve status information (example of versioning)
app.get('/status', (req, res) => {
  res.json({
    status: 'running',
    version: 'v2',  // Update the version here
    environment: 'production',
    uptime: process.uptime()
  });
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



