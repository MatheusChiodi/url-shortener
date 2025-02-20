import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [qrCopied, setQrCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setQrCodeUrl('');
    setCopied(false);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/shortUrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL. Please try again.');
      }

      const data = await response.json();
      setShortUrl(data.short_url);
      const qrResponse = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.short_url}`;
      setQrCodeUrl(qrResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyQrCode = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const clipboardItem = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([clipboardItem]);
      setQrCopied(true);
      setTimeout(() => setQrCopied(false), 2000);
    } catch (err) {
      setError('Error copying QR Code.');
    }
  };

  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-md bg-white text-gray-800 rounded-lg shadow-xl p-6 mt-[10%]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Shorten URL</h1>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter URL"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5555]"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <motion.button
            type="submit"
            className={`p-3 rounded-md transition ${
              loading
                ? 'bg-[#282A36] cursor-not-allowed'
                : 'bg-[#44475A] hover:bg-[#FF4444]'
            } text-white font-semibold`}
            disabled={loading}
          >
            {loading ? 'Shortening...' : 'Shorten'}
          </motion.button>
        </form>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        {shortUrl && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
            <p className="text-gray-700 font-medium">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5555] font-semibold hover:underline break-all"
            >
              {shortUrl}
            </a>
            <motion.button
              onClick={copyToClipboard}
              className="ml-2 p-2 text-sm bg-[#44475A] text-white rounded-md hover:bg-[#FF5555] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
        )}

        {qrCodeUrl && (
          <div className="w-full flex flex-col items-center mt-4 p-4 gap-3 bg-gray-100 rounded-md">
            <p className="text-gray-700 font-medium">QR Code:</p>
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="w-32 h-32 border border-gray-300 rounded-lg shadow-md"
            />
            <motion.button
              onClick={copyQrCode}
              className="mt-2 p-2 text-sm bg-[#44475A] text-white rounded-md hover:bg-[#FF5555] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {qrCopied ? 'QR Copied!' : 'Copy QR Code'}
            </motion.button>
          </div>
        )}
      </motion.div>

      <footer className="mt-6 text-sm text-white pb-[10px]">
        Developed by{' '}
        <a
          href="https://matheuschiodi.github.io/Portfolio/"
          className="text-[#FF5555] hover:underline"
          target="_blank"
          title="Visit my portfolio"
        >
          MChiodi
        </a>
      </footer>
    </motion.div>
  );
}
