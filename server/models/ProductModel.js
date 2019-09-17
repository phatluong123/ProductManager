
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ProductManager', {useUnifiedTopology: true,useNewUrlParser: true});
const ProductSchema = new mongoose.Schema({
    title : {type : String,  required : true, minlength :[4, 'title must be longer than 4']},
    price : {type :Number , required :true, default: 0},
    imageUrl :{type: String, default : '' }
},{timestamps: true})
mongoose.model('ProductModel', ProductSchema);
