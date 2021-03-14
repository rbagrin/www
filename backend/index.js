const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const api_port = process.env.API_PORT ?? 5000;
const api_domain = process.env.API_DOMAIN ?? "http://localhost";

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin: `${process.env.WEB_APP_DOMAIN}:${process.env.WEB_APP_PORT}`}));

app.get('/test', (req, res) => {
  res.send('Hello World! This is Radu');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
  })
}
app.listen(api_port, () => {
  console.log(`Example app listening at ${api_domain}:${api_port}`)
});