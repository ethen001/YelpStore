const express = require("express"),
    router = express.Router();

router.get("/", function (req, res) {
    res.render("newItem.ejs", {title: "YelpStore - new item"});
});

module.exports = router;