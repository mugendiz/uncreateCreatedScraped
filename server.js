// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");
var path = require("path");

var PORT = 8080;
var app = express();

var db = require("./models");

var note = require("./models/note.js");
var Article = require("./models/article.js");
var axios = require("axios");

// Initializing express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// MongoDB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/populatedb", {
  useMongoClient: true
});

// Routes
// =============================================================
require("./controllers/article")(app);

// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
db.Headline.create({ name: "Gadget" })
  .then(function(dbHeadline) {
    console.log(dbHeadline);
  })
  .catch(function(err) {
    console.log(err.message);
  });

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
