const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const api =require('./api');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.send("hello worldddd");
});
app.use('/api', api);