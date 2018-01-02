var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
})

app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });