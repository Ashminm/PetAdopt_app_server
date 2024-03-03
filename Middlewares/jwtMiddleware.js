const jwt=require("jsonwebtoken")


const jwtMiddleware=(req,res,next)=>{
    console.log("Inside JWT Middleware Act!!!");
    try{
        const token = req.headers.authorization.split(" ")[1]
        const result=jwt.verify(token,"superSecretKey")
        console.log(result);
        req.payload = result.userId;
        next()
    }
    catch(err){
        res.status(401).json("Authorization Faild, Login First!!")
    }
   
}

module.exports=jwtMiddleware

