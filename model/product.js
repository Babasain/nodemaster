const mongoose = require('mongoose');


const {Schema}=mongoose;

const productSchema = new Schema({
    title: {type:String,required:true}, // String is shorthand for {type: String}
    description: String,
    category: String,
    price:{type:Number,min:[1,'Min price should be 1'],required:true},
    discountPercentage: {type:Number,min:[0,'wrong min percentage'],max:[50,'wrong max percentage']},
    rating: {type:Number,min:[0,'wrong rating'],max:[5,'wrong rating']},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    thumbnail:{type:String,required:true},
    images:[String],
    
    
  });
  exports.Product=mongoose.model('Product',productSchema)