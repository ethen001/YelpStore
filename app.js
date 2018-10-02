//importing necessary libraries,and routes
const express  = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    indexRouter = require("./routes/index"),
    itemsRouter = require("./routes/items"),
    newItemRouter = require("./routes/newItem");
 
//setting default template file  
app.set("view engine", "ejs");

//specifiying directory and packages to use
app.use(express.static('public'));
app.use(express.static('models'));
app.use(bodyParser.urlencoded({extended: false}))

//using the imported routes and specifying url
app.use("/", indexRouter);
app.use("/itemsforsale", itemsRouter);
app.use("/itemsforsale/new", newItemRouter);

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpStore server has started");
});