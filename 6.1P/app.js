const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to SIT737 Kubernetes App!</h1><p>Your app is running successfully.</p>');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});


