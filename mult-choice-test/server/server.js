const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.use(jsonParser);
app.use(cors());

app.post('/getCards', (req, res) {

});

app.listen(3001, function () {
    console.log('App listening on port 3001!');
  });