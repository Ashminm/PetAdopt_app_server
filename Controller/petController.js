const pets=require("../Models/petSchema")
const jwt = require("jsonwebtoken");

const addPets=async(req,res)=>{
    console.log("inside add pets Details!");
  
    const {pname,overview,age,breed,color,gender,Weight,status,userid,pId,amount,number, categories}=req.body
    console.log(`${pname},${overview},${age},${breed},${color},${gender},${Weight},${status},${ userid},${pId},${amount},${number},${ categories}`);
    const p_image=req.file.filename
    
    try{
        const existingPet=await pets.findOne({pId})
        if(existingPet){
            res.status(406).json("Existing Pet, Please try correct Pet license ID!!")
        }
        else{
            const newPet=new pets({pname,overview,age,breed,color,gender,Weight,status,p_image,userid,pId,amount,number,categories})
            await newPet.save()
            res.status(200).json(newPet)
        }
    }
    catch(err){
        res.status(401).json("Something Went Wrong :" + err)
    }
    

}

module.exports={
    addPets
}


