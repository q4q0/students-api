const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const dbConnection = require('./config/db');
const morgan = require('morgan');
const app = express();

/* ------- Config file -------- */
dotenv.config('/config/config.env');

/* ------- Body parser  -------- */
app.use(express.json());

/* ------- Mongodb connection -------- */
dbConnection();

/* ------- Morgan middleware -------- */
app.use(morgan('dev'));

/* ------- Routes -------- */
const studentRouter = require('./routes/studentRouter');
app.use('/api/v1/students', studentRouter);

/* ------- Server -------- */
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'http://localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';
app.listen(PORT, () => {
  console.log(
    `server is running on ${HOST}:${PORT} in ${NODE_ENV} mode`.bgGreen.black
  );
});
