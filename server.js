// dependencies
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Initialize Express App
var express = require("express");
var app = express();


app.use(logger("dev"));
app.use(
express.urlencoded({ 
  extended: false
})
  );

  app.use(express.static(process.cwd() + "/public"));
  // require set up handlebars
  var exphbs = require("express-handlebars");
  app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
    );
  app.set("view engine", "handlebars");

  //Connecting to mongoDB
  // mongoose.connect("mongodb://localhost/scraped_news");
  const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/scraped_news";
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("connected to mongoose!");
  });



var routes = require("./controlles/controller");
app.use("/", routes);
// Create localhost port
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("listening PORT" + port);

});

