const jwt=require("jsonwebtoken")
const {Donateur}=require("../../Model/User")
require("dotenv").config()


const signUp=async (req,res)=>{
    const {donateurMail,donateurName,donateurPswd}=req.body 
    const verifyDonateur=await Donateur.find({mail:donateurMail})
    if(verifyDonateur.length!=0){
        return res.status(401).json({msg:"Donateur  already exist ! "})
    } 
    new Donateur({
        mail:donateurMail,
        name:donateurName,
        pswd:donateurPswd,
    }).save();
    return res.status(200).redirect("/donateur/login");
}

module.exports=signUp
