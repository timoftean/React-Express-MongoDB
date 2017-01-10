var mongoose = require ('mongoose');
var GroceryItem = require('./models/GroceryItem');
mongoose.connect('mongodb://localhost/data/db',function(){
    console.log("connected.");
    var items = [];

    items = [{
        name: "Ice Cream"
    }, {
        name: "Waffles"
    }, {
        name: "Candy",
        purchased:true
    }, {
        name: "Snarks"
    }];

    items.forEach(function(item){
        new GroceryItem(item).save();
    });
});
