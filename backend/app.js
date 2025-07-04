const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const dbConfig = require('./config/dbConfig.js')

const app = express();
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
