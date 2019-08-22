var axios = require("axios");
var cheerio = require("cheerio");

var scrap = function() {
 return axios.get("https://www.npr.org/sections/news/").then(function(res) {
     var $ = cheerio.load(res.data);

     var articles = [];

     $(".item-info").each(function(i, element) {
         var scrapedArticle = {}

        scrapedArticle.title = $(element)
           .children(".title")
           .children("a")
           .text()

        scrapedArticle.summary = $(element) 
          .children(".title")
          .children("p")
          .children("a")
          .text()


           console.log(scrapedArticle)
     })
 })
};

scrap()