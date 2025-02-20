const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const urls = {};

function generateShortCode(length = 6) {
  const chars = 'MATHEUSCHIODIDEVORMCHIODI2025';
  let shortCode = '';
  for (let i = 0; i < length; i++) {
    shortCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  // Garante que o código seja único
  while (urls[shortCode]) {
    shortCode = '';
    for (let i = 0; i < length; i++) {
      shortCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  return shortCode;
}

app.post('/encurtar', (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL não fornecida' });
  }
  
  const shortCode = generateShortCode();
  urls[shortCode] = url;
  
  // Cria a URL curta baseada no host e protocolo da requisição
  const shortUrl = req.protocol + '://' + req.get('host') + '/' + shortCode;
  res.status(201).json({ short_url: shortUrl });
});

// Rota para redirecionar a URL curta para a URL longa
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const longUrl = urls[shortCode];
  if (longUrl) {
    return res.redirect(longUrl);
  }
  res.status(404).json({ error: 'URL não encontrada!' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
