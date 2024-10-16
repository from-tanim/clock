// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/qrCodeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const QRCodeSchema = new mongoose.Schema({
    idNo: String,
    name: String,
    fatherName: String,
    motherName: String,
    dob: Date,
    bloodGroup: String,
});

const QRCodeModel = mongoose.model('QRCode', QRCodeSchema);

// POST route to save QR code data
app.post('/api/qrcode', async (req, res) => {
    try {
        const qrCodeData = new QRCodeModel(req.body);
        await qrCodeData.save();
        res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
