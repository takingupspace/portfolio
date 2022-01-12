const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Home Page');
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})