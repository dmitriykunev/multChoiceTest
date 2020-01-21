const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const users = [{
  login: 'Dmitriy',
  password: '123456',
  role: 'admin',
  token: 'g4dh6i7l13hexG'
},
{
  login: 'Teacher',
  password: '123456',
  role: 'teacher',
  token: 'Gxeh31l7i6hd4g'
}]

const userCheckOut =(login, password) => {

}

app.use(jsonParser);
app.use(cors());

app.get('/', (res) => {
  res.sendFile('../pusblic/index.html')
  res.statusCode = 200;
});


app.get('/login', (req, res) => {

});

app.listen(3001, function () {
    console.log('App listening on port 3001!');
  });