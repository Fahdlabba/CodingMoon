const jwt=require("jsonwebtoken")
require("dotenv").config()

const verifyToken=(req,res,next)=>{
    const token = req.cookies.token;
    try{
        const user=jwt.verify(token,process.env.SECRET_TOKEN)
        req.user=user;
        next()
    }catch{
        res.clearCookie("token");
        return res.sendStatus(401);
    }
}
module.exports=verifyToken