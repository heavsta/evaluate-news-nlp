//DOTENV
const dotenv = require('dotenv');
dotenv.config();

// EXPRESS, Cors & Body Parser
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//AYLIEN API
var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post('/sentiment', function(req, res) { //POST route
    textapi.sentiment({
        text: req.body.text,
        mode: 'tweet'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response)
        }
      });
})