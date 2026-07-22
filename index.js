const express = require('express');
const app = express();
const connectDatabase = require('./config/db');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

