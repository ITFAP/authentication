const express = require('express');
const path = require('path');
const routing = require('./router/route');
const auth = require('./config/configer');

const app = express();

app.use('/auth', routing);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'home'))

app.listen(3000, () => {
  console.log('server starts with port 3000')
})

app.get('/', (req, res) => {
  res.render('index')
})
