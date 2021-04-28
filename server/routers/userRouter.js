import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/utils.js';


const router = express.Router();

router.get('/seed',expressAsyncHandler(async(req,res)=>{
    // await User.remove({});

    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});

})
);

router.post('/signin', expressAsyncHandler(async(req,res)=>{
    const user = await User.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
return;
        }

    }
    res.status(401).send({message:"Invalid email or password "})
}))


router.post("/register",expressAsyncHandler(async(req,res)=>{
        const {name, email} = req.body
    const user = new User({
        name, 
        email, 
        password: bcrypt.hashSync(req.body.password, 8)
    })
    
    const createdUser = await user.save();

    if(createdUser){
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser)
        })
    }
}))


export default router;