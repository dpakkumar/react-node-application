const express = require('express');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const routes = require('./app/routes');
const mongoose = require('mongoose');
const mongoDBConnectionString = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9';

mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', () => console.log('Connection error!'));
db.once('open', () => {
  console.log('Successfully connected!');
});

app.use(express.json());

app.enable('view cache');
app.engine('html', engine({
  defaultLayout: 'layout',
  extname: '.html'
}));

app.use(routes);

app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));


app.get('*', (req, res) => {
  req.tokens = { value: 'Text' };
  res.render('index', { ...req.tokens, pageName: 'home' });
})

app.listen(8080, () => console.log('Listening at 8080'));