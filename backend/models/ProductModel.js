const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },

},{timestamps:true})

const productSchema = mongoose.Schema({
    User : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name: {
        type:String,
        required:true,
    },
    
    image: {
        type: String,
        required:true,
    },

    brand: {
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    reviews:[reviewSchema],
    rating: {
        type:Number,
        required:true
    },
    numReviews: {
        type:Number,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    countInStock: {
        type:Number,
        required:true,
    },
    reviews:[reviewSchema]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;