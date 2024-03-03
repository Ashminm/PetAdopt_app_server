const admins = require("../Models/adminSchema")
const pets = require("../Models/petSchema")

exports.profileUpdateAdmin=async(req,res)=>{
    
    const {username,password,email,location,phone}=req.body
    const Ad_image=req.file?req.file.filename:req.body.Ad_image
    const {id}=req.params
    // console.log(id);
    try{
        console.log("Inside EditAdmin Profile");
        const result =await admins.findByIdAndUpdate({_id:id},{username,password,email,Ad_image,location,phone})
        res.status(200).json(result)
        console.log(result);
    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.deleteProject=async(req,res)=>{
    console.log("Inside delete");
    const {id}=req.params
try{
    const result=await pets.findByIdAndDelete({_id:id})
    console.log(result);
    res.status(200).json(result)
}
catch(err){
    res.status(401).json(err)
}
    
}


exports.editPet=async(req,res)=>{
    console.log("inside editPet");
    const userId=req.payload
    const {pname,overview,age,breed,color,gender,Weight,status,pId,amount,number,categories}=req.body
    const uploaadedFile=req.file?req.file.filename:req.body.p_image
    const {id}=req.params
    // res.send(`${id},${uploaadedFile},${userId},${overview}`)
    try{
        console.log("edit");
        const result=await pets.findByIdAndUpdate({_id:id},{pname,overview,age,breed,color,gender,Weight,status,p_image:uploaadedFile,amount,number,categories,userId})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
    
    
}