const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.get('*', (req, res) => {
    const requestedUrl = req.url;
    const filePath = path.join(__dirname, requestedUrl);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File does not exist, send a 404 response
            res.status(404).send('Not Found');
        } else {
            // File exists, send it
            res.sendFile(requestedUrl, { root: __dirname });
        }
    });
});