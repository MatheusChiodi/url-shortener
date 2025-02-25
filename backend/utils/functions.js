const urls = {};

function generateShortCode(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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

module.exports = { generateShortCode };