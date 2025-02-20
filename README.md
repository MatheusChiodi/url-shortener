# 🔗 URL Shortener - URL Shortener 🚀

This project is a complete **URL Shortener**, divided into **two parts**:

1. **Backend (Node.js + Express)** → Responsible for shortening URLs and generating QR Codes.

2. **Frontend (React + Tailwind CSS + Framer Motion)** → Interactive interface to shorten and view shortened URLs.

## 📌 **About the Project**
This project allows users to shorten long URLs and generate **QR Codes** for easy sharing. It includes features such as:
- **Automatic generation of short links** 🏷️
- **Short link redirection** 🔄
- **Automatic generation of QR Codes** 📲
- **Button to copy the shortened URL and the QR Code image** 📋
- **Modern and responsive interface with animations** 🎨

---

## 🚀 **Technologies Used**
### **Backend:**
- **Node.js** - JavaScript platform for server-side execution.
- **Express.js** - Framework for creating APIs.
- **CORS** - Access control between the frontend and backend.
- **QR Code API** - Automatic generation of QR Codes.

### **Frontend:**
- **React.js** - JavaScript library for creating user interfaces.
- **Tailwind CSS** - CSS framework for fast and responsive styling.
- **Framer Motion** - Library for fluid animations.

---

## 🛠️ **How ​​to Set Up the Project**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/user/url-shortener.git
cd url-shortener
```

### **2️⃣ Configure the Backend**
```bash
cd backend
npm install
node index.js
```
> The server will be started at `http://localhost:3000`

### **3️⃣ Configure the Frontend**
```bash
cd frontend
npm install
npm run dev
```
> The frontend will be started at `http://localhost:5173`

---

## 🎯 **How ​​to Use**
### **1️⃣ Shorten a URL**
- Enter the long URL in the input field and click the **"Shorten"** button.
- The shortened link will appear below, ready to be copied and shared.

### **2️⃣ Access the Shortened URL**
- Click on the generated URL to open the original website.

### **3️⃣ Generate QR Code**
- A QR Code is automatically generated for each shortened URL.
- Click the **"Copy QR Code"** button to copy and paste it wherever you want.

---

## 📂 **Project Structure**
```
📦 url-shortener
├── 📁 backend # API in Node.js
│ ├── 📁 controllers # Shortening logic and QR Code
│ ├── 📁 routes # API routes
│ ├── 📁 utils # Helper functions
│ ├── index.js # Main backend file
│ ├── package.json # Node.js dependencies
│
├── 📁 frontend # React interface
│ ├── 📁 src # Source Code
│ ├── App.js # Main Component
│ ├── package.json # React Dependencies
│
└── README.md # This File
```
---

## 📖 **API Routes**
### **1️⃣ Shorten a URL**
- **Method:** `POST`
- **Endpoint:** `/shortUrl`
- **Body:**
```json
{
"url": "https://www.google.com"
}
```
- **Response:**
```json
{
"short_url": "http://localhost:3000/abc123"
}
```

### **2️⃣ Redirect to the original URL**
- **Method:** `GET`
- **Endpoint:** `/:shortCode`
- **Example:** `http://localhost:3000/abc123`
- **Response:** Redirects to the original URL.

### **3️⃣ Generate QR Code**
- **Method:** `GET`
- **Endpoint:** `/qr/:shortCode`
- **Example:** `http://localhost:3000/qr/abc123`
- **Response:**
```json
{
"qr_code_url": "https://api.qrserver.com/v1/create-qr-code/?data=https://www.google.com&size=150x150"
}
```

---

## 🤝 **Contribution**
Feel free to open issues and pull requests for improvements!

---

## 👨‍💻 **Developed by**
💡 **MChiodi**  
🔗 [Portfólio](https://matheuschiodi.github.io/Portfolio/)  

---

## ⭐ **Gostou do projeto?**
Dê uma ⭐ no repositório e compartilhe com amigos! 🚀
