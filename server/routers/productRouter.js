import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const router = express.Router();



router.get('/', expressAsyncHandler(async(req,res)=>{
    const products = await Product.find({});

    res.send(products);
}));



router.get("/seed", expressAsyncHandler(async(req,res)=>{

    // await Product.remove({});

        const createdProducts = await Product.insertMany(data.products);

        res.send({products: createdProducts});
}))


router.get('/:id', expressAsyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
    res.send(product);
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
}))


export default router;