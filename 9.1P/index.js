const express = require('express');
const app = express();

// Use middleware to parse JSON request body
app.use(express.json());

// Set port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Route for POST /create
app.post('/create', (req, res) => {
    const name = req.body.name;  // Extract data from the JSON payload
    console.log('Received name:', name);  // Log for debugging

    // Respond with a message or handle the request
    res.status(200).send(`Name received: ${name}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
