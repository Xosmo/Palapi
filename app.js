const express = require('express');
const connectDB = require('./db');
const palsRouter = require('./routers/palsRouter');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/', palsRouter);

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

app.listen(port, () => {
    console.log(`${hours}:${minutes}:${seconds} - API started on port ${port}`);
});