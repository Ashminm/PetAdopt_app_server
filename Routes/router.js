const express=require('express')
const usercontroller= require('../Controller/userController')
const router=new express.Router()
const petController=require("../Controller/petController")
const adminController = require("../Controller/adminController")

const multerConfig = require("../Middlewares/petMiddleware")
const jwtMiddleware= require("../Middlewares/jwtMiddleware")

router.post('/user/register',usercontroller.register)
router.post('/user/login',usercontroller.login)
router.post('/admin/login',usercontroller.login)
router.post('/pet/addpet',jwtMiddleware,multerConfig.single('p_image'),petController.addPets)
router.get('/user/petlist',jwtMiddleware,usercontroller.userPets)
router.get('/pet/pets',jwtMiddleware,usercontroller.getAllPets)
router.get('/pet/history',jwtMiddleware,usercontroller.getHistory)
router.put('/user/updateprofile/:id',jwtMiddleware,multerConfig.single('image'),usercontroller.profileUpdate)
router.put('/admin/updateprofileAdmin/:id',jwtMiddleware,multerConfig.single('Ad_image'),adminController.profileUpdateAdmin)
router.delete('/pet/deletepet/:id',jwtMiddleware,adminController.deleteProject)
router.put('/pet/editpet/:id',jwtMiddleware,multerConfig.single('p_image'),adminController.editPet)


module.exports=router