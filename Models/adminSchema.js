const mongoose=require('mongoose')
const validators=require('validator')

const adminSchema=new mongoose.Schema({
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
    Ad_image:{
        type:String
    },
    location:{
        type:String
    },
    phone:{
        type:String
    }
})

const admins=mongoose.model('admins',adminSchema)

module.exports=admins
