const mongoose=require("mongoose")

const petSchema=new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    breed:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    Weight:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    p_image:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    pId:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    categories: {
        type:[String],
        required: true
    },
});



const pets=mongoose.model('pets',petSchema)
module.exports=pets