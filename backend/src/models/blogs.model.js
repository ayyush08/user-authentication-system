import mongoose, { Schema } from "mongoose";


const blogsSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
}) 

export const Blogs = mongoose.model('Blogs',blogsSchema)