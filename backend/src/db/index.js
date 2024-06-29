import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => { 
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    }
    catch(error){
        console.error('MongoDB Connection Error:',error);
        process.exit(1);
    }
    }

export default connectDB