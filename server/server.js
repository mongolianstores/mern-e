import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';


dotenv.config();



const app = express();
app.use(express.json());


connectDB();

app.get("/api/config/paypal", (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || "sb")
});

app.use("/api/products", productRouter)
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter)

app.use((err,req,res,next)=>{
    res.status(500).send({message: err.message});

})



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.underline)
})