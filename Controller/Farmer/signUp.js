const jwt=require("jsonwebtoken")
const {Farmer}=require("../../Model/User")
require("dotenv").config()

const signUp=async (req,res)=>{
    const {farmerMail,farmerPswd,farmerBeehive}=req.body 
    const verifyFarmer=await Farmer.find({mail:farmerMail})
    if(verifyFarmer.length!=0){
        return res.status(401).json({msg:"Farmer already exist ! "})
    }
    new Farmer({
        mail:farmerMail,
        pswd:farmerPswd,
        beehiveNumber:farmerBeehive,
    }).save();
    return res.status(200).redirect("/login/farmer");
}
module.exports=signUp