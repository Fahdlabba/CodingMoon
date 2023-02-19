const jwt=require("jsonwebtoken")
const {Donateur}=require("../../Model/User")
require("dotenv").config()

const signInDonateur=async (req,res, )=>{
    const {donateurMail,donateurPswd}=req.body;
    const donateur=await Donateur.find({mail:donateurMail ,  pswd:donateurPswd})
    if(donateur.length==0){
        return res.status(401).json({msg:"Donarteur Not Found"})
    }
    const token=jwt.sign({donateur},process.env.SECRET_TOKEN,{expiresIn:'1h'});
    res.cookie("token",token,{
        httpOnly:true
    })
    return res.json("hello");
}
module.exports=signInDonateur