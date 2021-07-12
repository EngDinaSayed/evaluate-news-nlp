var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

var MeaningCloud = require('meaning-cloud');
const bodyParser = require('body-parser');
const cors = require('cors')
const fetch = require('node-fetch')

const dotenv = require('dotenv');
dotenv.config();

/*
const textapi = new MeaningCloud ({
    application_key: process.env.API_KEY
});
*/

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

/*
app.post('/testing', async (req, res, next) => {
  try {
    var data = textapi.sentiment({
    	url: req.body.url,
        // 'text': req.body.theText
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }
    });
  } catch(error) {
    return next(error)
  }
})
*/

/*
app.post('/api', async function(req, res){
	const userURL = req.body.url;
	console.log(`URL to be processed: ${userURL}`);
	const apiURL = `${baseURL}?key=${apiKey}&url=${userURL}&lang=en`;
	const response = await fetch(apiURL);
	const APIdata = await response.json();
	console.log(APIdata);
	res.send(APIdata);
})
*/

app.post('/article', async function(req, res){
	const userURL = req.body.text;
	console.log(`URL to be processed: ${userURL}`);
	const apiURL = `${baseURL}?key=${apiKey}&url=${userURL}&lang=en`;
	const response = await fetch(apiURL);
	const APIdata = await response.json();
	console.log(APIdata);
	res.send(APIdata);
})


/*
app.post('/api', (req, res) => {
const url = req.body.url;
getSentiment(url, apiKey, (data) => {
console.log(data);
res.send(data);
});
})

const getSentiment = (url, key, callback) => {
request(https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&url=${url}, {
json: true },
(err, res, body) => {
if (!err && res.statusCode == 200) {
callback(body);
} else {
console.log(error);
}
});
}
*/

/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/