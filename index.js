const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// This snippet below helps handle CORS related issues that we may face when trying to access the API from different domains 
// during development and testing.

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use((req, res, next) => {
    res.send('Welcome to Express');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});