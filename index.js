const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exp = require('constants');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

mongoose.connect('mongodb://localhost:27017/ms-quilt-guild');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', async (req, res) => {
  res.render('browse/about');
});

app.get('/contact-us', async (req, res) => {
  res.render('/browse/contact');
});

app.get('/events', async (req, res) => {
  res.render('/browse/events');
});

app.get('/gallery', async (req, res) => {
  res.render('/browse/gallery');
});
