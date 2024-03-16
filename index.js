require('dotenv').config()
const express=require('express')
const cors= require('cors')
// -----------------
const petserver = express()
petserver.use(cors())
petserver.use(express.json())
// ---------------------
const router=require('./Routes/router')
// ----------------
require('./dbConnection/connectrion')

const middleware=require("./Middlewares/userMiddleware")
petserver.use(middleware)
const middleware1=require("./Middlewares/adminMiddleware")
petserver.use(middleware1)
// ------------------
petserver.use(router)
// ------------
const PORT=4000 || process.env.PORT

petserver.use('/upload',express.static('./uploads'))

// ----------------

petserver.listen(PORT,()=>{
    console.log("Server is Started at:",PORT);
})

// -----------------------------

petserver.get('/',(req,res)=>{
    res.send("<h1>Server is Successfully Running!!! let's start</h1>")
})
