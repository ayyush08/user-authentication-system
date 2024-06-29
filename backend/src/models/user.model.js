import mongoose,{Schema} from 'mongoose';


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },
    refreshToken:{
        type:String
    }
},{
    timestamps:true
})