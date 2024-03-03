// const Catagory=require("../Models/catagorySchema")



// const addcatagory = async (req, res) => {
//     console.log("Inside addcatagory function");

//     try {
//         console.log("Request Body:", req.body);

//         const { licenceId, catagories, allPets } = req.body;
//         console.log(`${licenceId},${catagories},${allPets}`);
//         const userId = req.userId;
//         console.log(userId);

//         console.log("Values extracted from request body:", licenceId, catagories, allPets, userId);

   
//         if (!licenceId || !catagories || !userId) {
//             console.log("Required fields are missing");
//             return res.status(400).json({ error: "licenceId, catagories, and userId are required fields." });
//         }

     
//         const existingCategory = await Catagory.findOne({ licenceId });

//         if (existingCategory) {
//             console.log("Category already exists");
//             return res.status(409).json({ error: "Category with the same licenceId already exists." });
//         }

        
//         const newCategory = new Catagory({
//             licenceId,
//             catagories,
//             allPets,
//             userId
//         });

   
//         await newCategory.save();

//         console.log("Category saved successfully");
//         res.status(201).json(newCategory);
//     } catch (error) {
//         console.error("Error while adding category:", error);

//         if (error.name === 'ValidationError') {
           
//             const validationErrors = Object.values(error.errors).map(err => err.message);
//             console.log("Validation Errors:", validationErrors);
//             return res.status(400).json({ error: "Validation Error", details: validationErrors });
//         }

//         res.status(500).json("Internal Server Error");
//     }
// };

// module.exports = {addcatagory};


