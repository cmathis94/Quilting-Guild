const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exp = require('constants');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
/* const bootstrap = require('bootstrap'); */
/* mongoose.connect('mongodb://localhost:27017/ms-quilt-guild'); */

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about-us', async (req, res) => {
  res.render('about');
});

app.get('/contact-us', async (req, res) => {
  res.render('contact');
});

app.get('/report-an-issue', async (req, res) => {
  res.render('reportIssue');
});

app.get('/events', async (req, res) => {
  res.render('events');
});

app.get('/gallery', async (req, res) => {
  res.render('gallery');
});

app.listen(3000, () => {
  console.log('On Port 3000');
});
