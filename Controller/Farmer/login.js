const jwt=require("jsonwebtoken")
const {Farmer}=require("../../Model/User")
require("dotenv").config()

const signIn=async(req,res)=>{
    const {farmerMail,farmerPswd}=req.body;
    console.log(req.body)
    const farmer=await Farmer.find({mail:farmerMail , pswd:farmerPswd})
    if(farmer.length==0){
        return res.json({msg:"Farmer Not Found !"})
    }
    const token=jwt.sign({farmer},process.env.SECRET_TOKEN,{expiresIn:'1h'});
    res.cookie("token",token,{
        httpOnly:true
    })
    return res.redirect("/panier");
}
module.exports=signIn