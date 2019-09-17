
const mongoose = require('mongoose'),
    Product = mongoose.model('ProductModel')
module.exports = {

    GetOne: function(req, res) {
        Product.findOne({_id : req.params.id})
            .then(result => res.json(result))
            .catch( err => res.json(err))
    },
    CreateProduct : function (req, res) {
        Product.create(req.body)
            .then(result => res.json(result))
            .catch( err => res.json(err))
    },
    GetAll : function (req, res) {
        Product.find({})
            .then(result => res.json(result))
            .catch( err => res.json(err))
    },
    DeleteProduct : function (req, res) {
        Product.remove({_id : req.params.id})
            .then(result => res.json(result))
            .catch( err => res.json(err))
    },
    EditProduct : function (req, res) {

        Product.updateOne({_id : [req.body._id]} ,{
            title : req.body.title,
            price : req.body.price,
            imageUrl : req.body.imageUrl
        }, { runValidators: true })
            .then(result => res.json(result))
            .catch( err => res.json(err))
    }


};
