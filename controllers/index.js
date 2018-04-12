
// Require Headline from models folder
var articles = require("../models/articles.js");
var index = require("../models/index.js");
var note = require("../models/note.js");

var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var axios = require("axios");

app.get("/scrape", function(req, res) {
  axios.get("https://uncrate.com/wanted/").then(function(response) {
    var $ = cheerio.load(response.data);

    $("article-title h1").each(function(i, element) {
      var result = {};

      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
      console.log(this);
      .children("a")
        .attr("href");

      // Create new object from result
      db.Article.create(result)
        .then(function(dbArticle) {})
        .catch(function(err) {
          return res.json(err);
        });
    });
    res.send("Scrape Complete");
  })
});

module.exports = ("scrape")
