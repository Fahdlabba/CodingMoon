const jwt=require("jsonwebtoken")
const {Farmer}=require("../../Model/User")
require("dotenv").config()

const signUp=async (req,res)=>{
    const {farmerMail,farmerName,farmerPswd,farmerBeehive}=req.body 
    const verifyFarmer=await Farmer.find({mail:farmerMail})
    if(verifyFarmer.length!=0){
        return res.status(401).json({msg:"Farmer already exist ! "})
    }
    new Farmer({
        mail:farmerMail,
        name:farmerName,
        pswd:farmerPswd,
        beehiveNumber:farmerBeehive,
    }).save();
    return res.status(200).redirect("/login/farmer");
}
module.exports=signUp