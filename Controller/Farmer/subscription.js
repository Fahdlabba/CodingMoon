const {Farmer}=require("../../Model/User")


const subscription=async (req,res)=>{
    const mail=req.query.mail;
    const farmer=await Farmer.find({mail:mail});
    const hornetNumber=farmer[0].hornetNumber;
    let updated=false
    if(hornetNumber<=180){
        await Farmer.updateOne(
            {mail:mail},
            {$set :{subscription:"Gold"}},
            (err,result)=>{
                if(err) console.log(err)
            }
        )
        updated=true
    }
    else if(hornetNumber<=60){
        await Farmer.updateOne(
            {mail:mail},
            {$set :{subscription:"Bronze"}},
            (err,result)=>{
                if(err) console.log(err)
            }
        )
        updated=true
    }else{
        await Farmer.updateOne(
            {mail:mail},
            {$set :{subscription:"Silver"}},
            (err,result)=>{
                if(err) console.log(err)
            }
        )
        updated=true
    }
    if(!updated) return res.json({msg:"HornetNumber Insufficient ! "})
    res.json({msg:"Subscription Updated Successfully !"})
}
module.exports=subscription