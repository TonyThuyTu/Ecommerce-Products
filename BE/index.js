const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const sequelize = require('./src/db/sequelize');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route test
app.get('/', (req, res) => {
  res.send('🚀 Welcome to Products API');
});

// Start server and connect DB
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL connection established successfully.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to connect to MySQL:', err);
  }
})();
