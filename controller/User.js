const fs = require("fs");

// Read the index.html file and product data
//const index = fs.readFileSync("index.html", "utf-8");
const path=require('path')
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,"data.json"), "utf-8"));
const users = data.users;
exports.createUser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
  };
  
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };

   exports.getUser = (req, res) => {
    //  By adding + sign with any number the number becomes a string...in this case our id is a number we have to convert
    //it in a string
    const id = +req.params.id;
    const product = users.find((p) => p.id === id);
    res.json(product);
  };
  
   exports.replaceUser = (req, res) => {
    const id = +req.params.id;
    const product = users.findIndex((p) => p.id === id);
    users.splice(product, 1, { ...req.body, id: id });
    res.status(201).json();
  };
  
   exports.updateUser = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex((p) => p.id === id);
    const product = users[productIndex];
    users.splice(productIndex, 1, { ...product, ...req.body });
    res.status(201).json();
  };
  
   exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex((p) => p.id === id);
    const product = users[productIndex];
  
    users.splice(productIndex, 1);
    res.status(201).json(product);
  };