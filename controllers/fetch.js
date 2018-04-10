

app.get("/") function() {
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
                  .then(function(dbArticle) {
                  })
                  .catch(function(err) {
                    return res.json(err);
                  });
              });
              res.send("Scrape Complete");
            })
          });
        };

      
