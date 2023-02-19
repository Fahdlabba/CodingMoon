const {Donateur}=require("../../../Model/User")

const succesPayment=(req,res)=>{
    const mail=req.query.mail;
    const date=Date();
    Donateur.updateOne(
        {mail:mail},
        {$push:{donationHistory:[{date}]}},
        {$inc:{donationAmount:5}},
        (err,result)=>{
            if(err) console.log(err)
        }
    )
    res.status(200).json({msg:"Donation Send Successfully ! "})
}
module.exports=succesPayment