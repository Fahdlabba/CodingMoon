const express=require("express")
const router=express.Router()
const payment=require("../Controller/Donateur/Donation/donation")
const successPayment=require("../Controller/Donateur/Donation/succes")
const login=require("../Controller/Donateur/login")
const signUp=require("../Controller/Donateur/signUp")
const verifyToken=require("../Middleware/verifyToken")

router.post("/login",login)
router.post("/signUp",signUp)
router.get('/payment',verifyToken,payment)
router.get("/payment/succes",successPayment)
// router.delete('/delete',delete)

module.exports=router