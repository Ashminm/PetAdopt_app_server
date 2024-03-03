const mongoose = require("mongoose")
const validators=require("validator")


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validators.isEmail, "Invalid Email"]
    },
    licenceId:{
        type:String     
    },
    image:{
        type:String
    },
    location:{
        type:String
    },
    phone:{
        type:String
    }
})

const users=mongoose.model('users',userSchema)

module.exports=users