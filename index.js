const express = require('express');
const cors = require('cors');
const app = express();
const shortRoutes = require('./routes/shortRoutes');

const port = 3000; 

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());
app.use('/', shortRoutes);  

app.options('*', cors());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
