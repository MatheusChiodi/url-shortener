// shortRoutes.js
const express = require('express');
const router = express.Router();
const shortController = require('../controllers/shortController');

// Define a rota e associa à função do controller
router.get('/:shortCode', shortController.shortCode);
router.post('/shortUrl', shortController.shortUrl);
router.get('/qr/:shortQrCode', shortController.shortQrCode);

module.exports = router;
