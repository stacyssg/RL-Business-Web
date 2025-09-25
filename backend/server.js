console.log('SERVER.JS IS BEING EXECUTED');

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API ROUTES FIRST
app.get('/api/test', (req, res) => {
    console.log('API TEST ROUTE HIT!');
    res.json({ message: 'API is working!' });
});

app.post('/api/contact', (req, res) => {
    console.log('CONTACT FORM DATA RECEIVED:', req.body);
    res.json({ 
        success: true, 
        message: 'Thank you! We received your message.' 
    });
});

// STATIC FILES AFTER API ROUTES
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/Images', express.static(path.join(__dirname, '../Images')));

// Remove the problematic catch-all route completely

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});