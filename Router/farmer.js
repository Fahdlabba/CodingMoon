const express=require("express")
const router=express.Router()
const giveFarmerSensor=require("../Controller/Farmer/getSensor")
const login=require("../Controller/Farmer/login")
const signUp=require("../Controller/Farmer/signUp")
const subscription =require("../Controller/Farmer/subscription")
const verifyToken=require("../Middleware/verifyToken")

router.post("/login",login)
router.post("/signUp",signUp)
router.use(verifyToken)
router.post('/getSensor',giveFarmerSensor)
router.post('/subscribe',subscription)

module.exports=router