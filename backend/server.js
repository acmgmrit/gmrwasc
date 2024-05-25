const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const app = express();

// Pre-Request Middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));     // Enable when required

// Configuration
dotenv.config();

// Constants
const PORT = process.env.PORT || 3333;

// Routes
app.get('/api', (req, res) => res.json({ msg: "Welcome to ACM Women Student Chapter GMRIT" }));

app.use(express.static(path.resolve('client')));
if (process.env.NODE_ENV === 'production') {
    app.use('*', (req, res) => res.sendFile(path.resolve('client', 'index.html')));
}

// Server
app.listen(PORT, () => console.log(`SERVER.INFO: Server started on port ${PORT}`));