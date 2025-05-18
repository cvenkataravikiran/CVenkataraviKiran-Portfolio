const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API endpoint for frontend connection test
app.get('/api/endpoint', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'venkataravikiran.challa@gmail.com',
            subject: `New Contact Form Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Serve React static build files
app.use(express.static(path.join(__dirname, '../frontend_portfolio/build')));

// Catch-all route (wildcard)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend_portfolio/build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
