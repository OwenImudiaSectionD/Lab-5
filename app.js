///TASK THREE

// Import core module, local module, and third-party module
const fs = require('fs'); // Core module
const express = require('express'); // Third-party module
const getGreeting = require('./greeting'); // Local module

// Initialize Express application
const app = express();
const PORT = 3000;

// Define a route that uses the local and core modules
app.get('/', (req, res) => {
    // Use the local module to get a greeting message
    const greetingMessage = getGreeting('User');

    // Use the core 'fs' module to read the contents of a file
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        
        // Send the greeting and file contents as a response
        res.send(`<h1>${greetingMessage}</h1><p>File contents:</p><pre>${data}</pre>`);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
