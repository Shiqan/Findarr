const path = require('path')
const express = require('express');
const engine = require('ejs-locals');

const app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/upcoming', function (req, res) {
    res.render('index');
});
app.get('/latest', function (req, res) {
    res.render('index');
});
app.get('/popular', function (req, res) {
    res.render('index');
});

module.exports = app;