// // Dependencies
// var express = require("express");
// var bodyParser = require("body-parser");
// var handlebars = require("express-handlebars");
// var mongoose = require("mongoose");
// var cheerio = require("cheerio");
// var request = require("request");
// var axios = require("axios");
//
//
// var PORT = 3000;
// var app = express();
//
// var db = require("./models");
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("views"));
//
// // MongoDB
// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/populatedb", {
//   useMongoClient: true
// });
//
// // The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
// db.Header.create({ name: "Headline" })
//   .then(function(dbHeadline) {
//     console.log(dbHeadline);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });
