
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const accountRoutes = require('./src/routes/accountRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/accounts', accountRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});