require('dotenv').config

const logout=async(req,res)=>{
    const token=req.cookies.token
    if(!token){
        return res.send('Login Fisrt')
    }
    res.clearCookie('token')
    return res.send('Logout ! ');
}
module.exports=logout