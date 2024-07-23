const fs=require('fs')
const model=require('../model/product');
const { default: mongoose } = require('mongoose');
const Product=model.Product;
 exports.createProduct = async(req, res) => {
   const product=new Product(req.body)
   
   try{
    await product.save();
    console.log("Product saved successfully!");
    res.status(201).json(req.body);

   }catch(error){
     console.log(error)
     res.status(400).json(req.body)
   }

  };
  
  exports.getProducts = async(req, res) => {
        
      const products=await Product.find();
      res.json(products)

        
  };
  
   exports.getProduct = async (req, res) => {
    //  By adding + sign with any number the number becomes a string...in this case our id is a number we have to convert
    //it in a string
    const id = req.params.id;
    console.log(id);
    const product = await Product.findById(id)
    res.json(product);
  };
  
   exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try{
    const product = await Product.findOneAndReplace({_id:id},req.body,{new:true});
    res.json(product)

    }catch(error){
      console.log(error)
    }
    
  };
  
   exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const product=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json();
  };
  
   exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try{
      const doc=await Product.findOneAndDelete({_id:id},{new:true})
      res.status(200).json(doc)
    }catch(err){
        console.log(err);
    }
  };