
var products = require('../controllers/ProductControllers');

module.exports = function(app){
    app.get('/AllProducts', function (req, res) {

        products.GetAll(req, res);
    })
    app.post('/newProduct', function (req, res) {
        products.CreateProduct(req, res)
    })
    app.delete('/DeleteProduct/:id', function (req, res) {
        products.DeleteProduct(req, res)
    })
    app.get('/product/:id', function (req, res) {
        products.GetOne(req, res);
    })
    app.put('/EditProduct', function (req, res) {
        products.EditProduct(req, res);
    })

}
