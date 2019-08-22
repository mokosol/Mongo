// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  
  summary: {
    type: String,
    required: true
  },

  link: {
    type: String,
  },
  date: {
    type: String,
  },

  comment: [{
    type: Schema.Types.ObjectId,
    ref: "comment"
  }]

});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;