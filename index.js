const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});



// app.get('/hello/:firstname/:lastname', (req, res) => {
// 	console.log(req.params);
// 	res.send('Hello ' + req.params.firstname + ' ' + req.params.lastname);
// });

app.get('/greeting/:name', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('Sup ' + req.query.title + ' ' + req.params.name + '?');
  });


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});