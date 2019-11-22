const express = require('express');
const app = express();

// hello

app.get('/', (req, res) => res.send('Zaki'));
app.get('/test', (req, res) => res.send('Puguh'));
app.get('/test2', (req, res) => res.send('Bonta'));

module.exports = app;
