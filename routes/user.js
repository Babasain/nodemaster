
const express=require('express')
const router=express.Router()
const Usercontroller=require('../controller/User')
router.post("/",Usercontroller.createUser);
router.get("/", Usercontroller.getAllUsers);

//Reading by adding conditional parameter..
router.get("/:id", Usercontroller.getUser);

//UPDATE PUT/prducts/:id
router.put("/:id", Usercontroller.replaceUser);

//IN PUT WE OVERWRITE THE VALUE IN THE ARRAY/OBJECT BUT IN PATCH WE DIDNT OVERWRITE A OBJECT OR ARRRAY
router.patch("/:id", Usercontroller.updateUser);

router.delete("/:id", Usercontroller.deleteUser);
exports.router=router;