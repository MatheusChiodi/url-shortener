# 🔗 URL Shortener - Encurtador de URLs 🚀

Este projeto é um **encurtador de URL** completo, dividido em **duas partes**:

1. **Backend (Node.js + Express)** → Responsável por encurtar URLs e gerar QR Codes.
2. **Frontend (React + Tailwind CSS + Framer Motion)** → Interface interativa para encurtar e visualizar URLs encurtadas.

## 📌 **Sobre o Projeto**
Este projeto permite que os usuários encurtem URLs longas e gerem **QR Codes** para fácil compartilhamento. Ele inclui funcionalidades como:
- **Geração de links curtos automaticamente** 🏷️
- **Redirecionamento de links curtos** 🔄
- **Geração automática de QR Codes** 📲
- **Botão para copiar a URL encurtada e a imagem do QR Code** 📋
- **Interface moderna e responsiva com animações** 🎨

---

## 🚀 **Tecnologias Utilizadas**
### **Backend:**
- **Node.js** - Plataforma JavaScript para execução no servidor.
- **Express.js** - Framework para criação de APIs.
- **CORS** - Controle de acessos entre o frontend e o backend.
- **QR Code API** - Geração automática de QR Codes.

### **Frontend:**
- **React.js** - Biblioteca JavaScript para criar interfaces de usuário.
- **Tailwind CSS** - Framework CSS para estilização rápida e responsiva.
- **Framer Motion** - Biblioteca para animações fluidas.

---

## 🛠️ **Como Configurar o Projeto**
### **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/url-shortener.git
cd url-shortener
```

### **2️⃣ Configurar o Backend**
```bash
cd backend
npm install
node index.js
```
> O servidor será iniciado em `http://localhost:3000`

### **3️⃣ Configurar o Frontend**
```bash
cd frontend
npm install
npm run dev
```
> O frontend será iniciado em `http://localhost:5173`

---

## 🎯 **Como Usar**
### **1️⃣ Encurtar uma URL**
- Digite a URL longa no campo de entrada e clique no botão **"Shorten"**.
- O link encurtado aparecerá abaixo, pronto para ser copiado e compartilhado.

### **2️⃣ Acessar a URL Encurtada**
- Clique na URL gerada para abrir o site original.

### **3️⃣ Gerar QR Code**
- Um QR Code é gerado automaticamente para cada URL encurtada.
- Clique no botão **"Copy QR Code"** para copiá-lo e colá-lo onde quiser.

---

## 📂 **Estrutura do Projeto**
```
📦 url-shortener
├── 📁 backend          # API em Node.js
│   ├── 📁 controllers  # Lógica do encurtamento e QR Code
│   ├── 📁 routes       # Rotas da API
│   ├── 📁 utils        # Funções auxiliares
│   ├── index.js        # Arquivo principal do backend
│   ├── package.json    # Dependências do Node.js
│
├── 📁 frontend         # Interface React
│   ├── 📁 src          # Código-fonte
│   ├── 📁 components   # Componentes React
│   ├── App.js          # Componente principal
│   ├── package.json    # Dependências do React
│
└── README.md           # Este arquivo
```

---

## 🔥 **Demonstração**
![Encurtador de URL](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/seu-usuario/url-shortener)

---

## 📖 **Rotas da API**
### **1️⃣ Encurtar uma URL**
- **Método:** `POST`
- **Endpoint:** `/shortUrl`
- **Body:**
  ```json
  {
    "url": "https://www.google.com"
  }
  ```
- **Resposta:**
  ```json
  {
    "short_url": "http://localhost:3000/abc123"
  }
  ```

### **2️⃣ Redirecionar para a URL original**
- **Método:** `GET`
- **Endpoint:** `/:shortCode`
- **Exemplo:** `http://localhost:3000/abc123`
- **Resposta:** Redireciona para a URL original.

### **3️⃣ Gerar QR Code**
- **Método:** `GET`
- **Endpoint:** `/qr/:shortCode`
- **Exemplo:** `http://localhost:3000/qr/abc123`
- **Resposta:**
  ```json
  {
    "qr_code_url": "https://api.qrserver.com/v1/create-qr-code/?data=https://www.google.com&size=150x150"
  }
  ```

---

## 🤝 **Contribuição**
Sinta-se à vontade para abrir issues e pull requests para melhorias!

---

## 👨‍💻 **Desenvolvido por**
💡 **MChiodi**  
🔗 [Portfólio](https://matheuschiodi.github.io/Portfolio/)  

---

## ⭐ **Gostou do projeto?**
Dê uma ⭐ no repositório e compartilhe com amigos! 🚀
