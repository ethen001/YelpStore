const express = require("express"),
    router = express.Router(),
    knex = require('knex')({
        client: 'pg',
        connection: {
            host : process.env.IP,
            user : 'ubuntu',
            password : '5432',
            database : 'yelpstoredb'
        }
    });

var incrementId = 10;

router.get("/", function (req, res) {
    knex.select('*').from('items').then(result =>{
        res.render("itemsPage.ejs", 
        {title: 'YelpStore - items for sale', items: result});
    }).catch(err => console.error(err));
});

router.post("/", function(req, res) {
    var item = {
        name: req.body.itemName,
        condition: req.body.condition,
        price: req.body.price,
        picture: req.body.itempicture,
        description: req.body.descr,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    knex('items').insert(item).then(result => {
        console.log(result);
         res.redirect("/itemsforsale");
    }).catch(err => {
        console.error(err);
    })
});



module.exports = router;