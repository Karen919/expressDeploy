const express = require('express')
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.end('<h1>home page</h1>');
});

app.get('/about', (req, res) => {
  res.end('<h1>about page</h1>');
});
app.get('/data', (req, res) => {
    res.send({
        firstName: "Bill",
        lastName: "Mills"
    });
});

app.listen(PORT, () => {
  console.log('server has been started');
});
