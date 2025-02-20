const functions = require('../utils/functions');
const generateShortCode = functions.generateShortCode;

const urls = {};

const shortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL não fornecida' });
  }

  const shortCode = generateShortCode();
  urls[shortCode] = url;

  // Cria a URL curta baseada no host e protocolo da requisição
  const shortUrl = req.protocol + '://' + req.get('host') + '/' + shortCode;
  res.status(201).json({ short_url: shortUrl });
};

const shortCode = async (req, res) => {
  const { shortCode } = req.params;
  const longUrl = urls[shortCode];
  if (longUrl) {
    return res.redirect(longUrl);
  }
  res.status(404).json({ error: 'URL não encontrada!' });
};

const shortQrCode = async (req, res) => {
  const { shortQrCode } = req.params;
  const longUrl = urls[shortQrCode];
  if (longUrl) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(longUrl)}&size=200x200`;
    return res.redirect(qrCodeUrl);
  }
  res.status(404).json({ error: 'URL não encontrada!' });
}

module.exports = { shortUrl, shortCode, shortQrCode };