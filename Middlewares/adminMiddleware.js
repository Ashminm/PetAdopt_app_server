const samplemiddleware=(req,res,next)=>{
    console.log("Middleware is on act!!");
    next()
}

module.exports=samplemiddleware