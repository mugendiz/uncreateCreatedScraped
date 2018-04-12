var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  notes: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

module.exports = ("./controllers");
