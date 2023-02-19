const {Donateur,Farmer}=require("../../Model/User")
const sendMail= require("../sendMail/sendMail")
const giveFarmerSensor=async (req,res)=>{
    const numberOfDonateur=await Donateur.countDocuments();
    const donateur=await Donateur.find()
    let collectedAmount=0;
    for(let i=0;i<numberOfDonateur;i++){
        collectedAmount+=donateur[i].donationAmount
        if(collectedAmount==1000){
            for(let j=0;j=i;j++){
                await updateOne(
                    {mail:donateur[j].mail},
                    {$set :{donationAmount:0}},
                    (err,result)=>{
                        if(err) console.log(err)
                    }
                )
            }
        }
    }
    const farmer=await Farmer.find({hasSensor:0}).sort({beehive:1,mail:-1})
    let index=0;
    while(collectedAmount>1000){
        await Farmer.updateOne(
            {mail:farmer[index].mail},
            {$inc:{hasSensor:1}},
            (err,result)=>{
                if(err) console.log(err);
            }
        )
        await sendMail(farmer[index].mail,farmer[index].location)
        collectedAmount-=1000;
        index++;
    }
    res.json({msg:"Sensor generated to farmer successfully ! "})

}
module.exports=giveFarmerSensor