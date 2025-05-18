const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const listingRoutes = require('./routes/listings');
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do ficheiro .env
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);

// Conexão ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));