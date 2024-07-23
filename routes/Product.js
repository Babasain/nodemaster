
const express=require('express')
const router=express.Router()
const ProductController=require('../controller/ProductController')
router.post('/',ProductController.createProduct);
router.get("/", ProductController.getProducts);

//Reading by adding conditional parameter..
router.get("/:id", ProductController.getProduct);

//UPDATE PUT/prducts/:id
router.put("/:id", ProductController.replaceProduct);

//IN PUT WE OVERWRITE THE VALUE IN THE ARRAY/OBJECT BUT IN PATCH WE DIDNT OVERWRITE A OBJECT OR ARRRAY
router.patch("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);
exports.router=router;