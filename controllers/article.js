var db = require("./models");
var axios = require("axios");

app.use(express.static("public"));


// New object from result
app.get("/scrape", function(req, res) {
  axios.get("https://uncrate.com/wanted/").then(function(response) {
    var $ = cheerio.load(response.data);

    $("article-heahline h1").each(function(i, element) {
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // New Article using the `result` object built from scraping
      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        });
        .catch(function(err) {
          return res.json(err)
        })
    });

    // If we were able to successfully scrape and save an Article, send a message to the client
    res.send("Scrape Complete");
  });
});
