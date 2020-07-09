/**
 * DOTENV CONFIG
 */

const dotenv = require('dotenv');
dotenv.config();


/**
 * LOCAL SERVER
 */

//Express
const express = require('express');
const app = express();

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

const cors = require('cors');
app.use(cors());


//Init server
app.use(express.static('dist'));
const port = 8081;

const server = app.listen(port, () => {console.log(`running succesfully on local host: ${port}`)});


/**
 * AYLIEN API
 */

//Init SDK
var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//Post Route using Sentiment Analysis
app.post('/sentiment', getSentiment);

function getSentiment(req, res) {
    textapi.sentiment(
        {
            text: req.body.text,
        }, 
        function(error, response) {
        if (error === null) {
            console.log('Server Response:' + response);
            res.send(response); 
            }
        }
    );
};