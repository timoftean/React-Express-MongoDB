
module.exports = function (app){

    var GroceryItem = require('./../models/GroceryItem.js');


    app.route('/api/items')
        .get(function(req,res){
            GroceryItem.find(function(error,doc){
                res.send(doc)
                ;
            });

        })
        .post(function(req,res){
            var item = req.body;
            console.log("adding items..",item);
            var groceryItem = new GroceryItem(item);
            groceryItem.save(function(err,data){
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(300).send("Saved");
                }
            });
        });

    app.route('/api/items/:id')
        .delete(function(req,res){
            GroceryItem.findById(req.params.id, function(err,item){
                if(err){
                    res.status(500).send(err);
                }
                else if(item){
                    item.remove();
                }
                else{
                    res.status(404).send('no book found');
                }
            });
        })
        .patch(function(req,res){
            GroceryItem.findOne({
                _id: req.body._id
            },function(error,doc){
                console.log("Patch Error:",error);
                if(doc){
                    for(var key in req.body){
                        doc[key] = req.body[key];
                    }
                    doc.save();
                    res.status(200).send();
                }
                else{
                    res.status(404).send("not found");
                }
            })
        });
};