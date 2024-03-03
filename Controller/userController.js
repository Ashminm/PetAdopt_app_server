const users = require("../Models/userSchema");
const pets = require("../Models/petSchema");
const jwt = require("jsonwebtoken");
const admins = require("../Models/adminSchema");

exports.register = async (req, res) => {
    console.log("inside Register function!");
    const { username, password, email } = req.body;
    console.log(`Username:${username},Password:${password},Email:${email}`);
    try {
        const existingUser = await users.findOne({ email });
        const existingAdmin = await admins.findOne({ email });
        console.log(existingUser);
        if (existingUser || existingAdmin) {
            res.status(406).json("Existing User!! Please try again!!");
        } else {
            const newUser = new users({ username, password, email, image: "", location: "", phone: "" });
            await newUser.save();
            res.status(200).json(newUser);
        }
    } catch (err) {
        res.status(401).json("Somthing Went Wrong" + err);
    }
};

exports.login = async (req, res) => {
    console.log("Inside Login Function!");
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email, password });
        const existingAdmin = await admins.findOne({ email, password });
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "superSecretKey");
            res.status(200).json({
                existingUser,
                role: "user",
                token,
            });
        } else if (existingAdmin) {
            const token = jwt.sign({ userId: existingAdmin._id }, "superSecretKey");
            console.log(token);
            res.status(200).json({
                existingAdmin,
                role: "admin",
                token,
            });
        } else {
            res.status(406).json("invali email or pasword");
        }
    } catch (err) {
        res.status(401).json("Something went wrong" + err);
    }
};
// -----get pet list Dash-----------
exports.userPets = async (req, res) => {
    console.log("inside user pets");
    console.log(req.payload);
    try {
        const data = await pets.find({ userId: req.payload });
        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        res.status(401).json(err);
    }
};

exports.getAllPets = async (req, res) => {
    console.log("inside getall pets");
    const searchKey = req.query.search;
    console.log(req.query);
    const query = {
        $or: [
            { breed: { $regex: searchKey, $options: "i" } },
            { amount: { $eq: searchKey } },
            { gender: { $regex: searchKey, $options: "i" } },
            { age: { $eq: searchKey } },
            { color: { $regex: searchKey, $options: "i" } },
            { pname: { $regex: searchKey, $options: "i" } },
        ],
    };
    try {
        const data = await pets.find(query);
        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        res.status(401).json(err);
    }
};

exports.getHistory = async (req, res) => {
    console.log("inside  Watch History");
    try {
        const history = await pets.find();
        res.status(200).json(history);
        // console.log(history);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error", message: err.message });
    }
};

// ------------------existing id--------
// exports.addHistory = async (req,res)=>{
//     console.log("inside addHistory Details");
// }

// exports.profileUpdate = async (req, res) => {
//     console.log("inside Profile");
//     const { body, file, params: { id } } = req;
//     const { username, password, email, licenceId, location, phone, image } = body;
//     try {
//         const existinglicenceId = licenceId?.trim();
//         if (!existinglicenceId) return res.status(400).json({ error: "LicenceId is required in the request" });

//         if (await users.findOne({ licenceId: existinglicenceId })) return res.status(406).json({ error: "Existing pet LicenceId, Please try a correct Pet license ID!!" });

//         const result = await users.findByIdAndUpdate(id, { username, password, email, image: file ? file.filename : image, location, phone, licenceId: existinglicenceId }, { new: true }).exec();
        
//         if (!result) return res.status(404).json({ error: "User not found" });
        
//         res.status(200).json(result);
//     } catch (err) {
//         res.status(500).json({ error: "Something went wrong: " + err });
//     }
// };

exports.profileUpdate=async(req,res)=>{
    
    const {username,password,email,licenceId,location,phone}=req.body
    const image=req.file?req.file.filename:req.body.image
    const {id}=req.params
    // console.log(id);
    try{
        console.log("Inside Edit Profile");
        const result =await users.findByIdAndUpdate({_id:id},{username,password,email,licenceId,image,location,phone})
        res.status(200).json(result)
        // console.log(result);
    }
    catch(err){
        res.status(401).json(err)
    }
}

