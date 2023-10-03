const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const exp = require('constants');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const Contact = require('./models/contactForm');
const Report = require('./models/reportIssue');
// const bootstrap = require('bootstrap');

// mongoose.connect('mongodb://127.0.0.1:27017/ms-quilt-guild-test');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Database connected');
// });

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets'));

// app.use((req, res, next) => {
//   if (!req.secure) {
//     return res.redirect(301, `https://${req.headers.host}${req.url}`);
//   }

//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (_req, res) => {
  res.render('home');
});

app.get('/about-us', async (_req, res) => {
  res.render('about');
});

app.get('/contact-us', async (_req, res) => {
  res.render('contact');
});

app.post('/contact-us', async (req, res) => {
  const contact = new Contact(req.body.contact);
  await contact.save();
  res.redirect('/thank-you');
});

app.get('/report-an-issue', async (_req, res) => {
  res.render('reportIssue');
});

app.post('/report-an-issue', async (req, res) => {
  const report = new Report(req.body.report);
  await report.save();
  res.redirect('/thank-you');
});

app.get('/thank-you', async (_req, res) => {
  res.render('formSubmission');
});

app.get('/events', async (_req, res) => {
  res.render('events');
});

app.get('/gallery', async (_req, res) => {
  res.render('gallery');
});

app.get('/privacy-policy', async (_req, res) => {
  res.render('privacyPolicy');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('On Port ' + port);
});
