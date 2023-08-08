const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

// add url below to WebAdress bar
// http://localhost:3000/greeting/Bob?title=Master

app.get('/greeting/:name', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('Sup ' + req.query.title + ' ' + req.params.name + '?');
  });

// tip calculator: add url below to WebAddress bar
// http://localhost:3000/tip/50/20
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    let tip = req.params.total * (req.params.tipPercentage / 100)
    res.send (`<h1>Your expected tip is ${tip}</h1>`)
})


// pull data from models/response.js
const responses = require('./models/response.js');
// will i be a millionaire: add url below to WebAddress bar 
// http://localhost:3000/magic/Will%20I%20Be%20A%20Millionaire
app.get('/magic/:question', (req, res) =>{
    let randomResponse = responses[Math.floor(Math.random() * responses.length)]
    res.send(`${req.params.question}<h1>${randomResponse}</h1>`)
})










// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});