import mongoose from 'mongoose';


const connectDB = async()=>{
        try {
            await mongoose.connect(process.env.MONGO_URI,{
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true
            })
            console.log(`MongoDB Connected...`.rainbow)
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
}

export default connectDB;