const express = require('express');
const path = require('path');
const app = express();
const routes = require('./app/annotations');
const { engine } = require('express-handlebars');

app.use(express.json());
app.use('/', routes);

app.enable('view cache');
app.engine('html', engine({
  defaultLayout: 'layout',
  extname: '.html'
}));

app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));


app.get('/', (req, res) => {
  req.tokens = {value: 'Text'};
  res.render('index', { ...req.tokens, pageName: 'home' });
})

app.listen(8080, () => console.log('Listening at 8080'));