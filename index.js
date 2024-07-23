const http = require("http");
require("dotenv").config();

const express = require("express");

const morgan = require("morgan");

const mongoose = require('mongoose');
const cors=require('cors')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const server = express();
const path=require('path')
const ProductRouter = require("./routes/Product");
const userRouter = require("./routes/user");
console.log("env", process.env.DB_PASSWORD);

server.use(cors())
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", ProductRouter.router);
server.use("/users", userRouter.router);
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
})
server.listen(process.env.PORT, () => {
  console.log("server started");
});

//Making A Middleware : Middle ware aik filter ke tarah use hota hay
// Exampel:Jese ke kisi Country ke ip se req ati hay aur ap nahi cahtay ke is country ke ip
//se jo req a rahi hay wo block ho toh ap middle ware use kar saktay ho ya us request ko ap aur jo middleware hain us ke pss bhejh saktay ho
//Imp Note : Server main more than 1 middle ware ho saktay hain

//express.json() method body ko parse karta hay means ke ye aik aesay middleware hay jo data request ke body main a raha hota hay us ko smajhta hay..

//server.use('/api',Router)
//Router.post("/products", ProductController.createProduct);

//READING Without any conditional parameter
