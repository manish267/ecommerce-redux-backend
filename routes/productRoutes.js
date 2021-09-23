const router=require('express').Router();
const { getProducts,
    getProductById}=require('./../controller/productControllers')


// @desc get all products
// @route GET /api/products
// @access Public
router.get('/',getProducts)

// @desc get a product by id
// @route GET /api/products/:id
// @access Public
router.get('/:id',getProductById)


// @desc get all products
// @route GET /api/products
// @access Public
router.get('/',(req,res)=>{
    
})


module.exports=router