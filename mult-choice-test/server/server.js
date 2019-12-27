const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.use(jsonParser);
app.use(cors());

app.get('/', (res) => {
  res.sendFile('../pusblic/index.html')
  res.statusCode = 200;
});


app.get('/start', (req, res) => {

});

app.listen(3001, function () {
    console.log('App listening on port 3001!');
  });