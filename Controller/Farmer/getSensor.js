const {Donateur,Farmer}=require("../../Model/User")
const sendMail= require("../sendMail/sendMail")
const giveFarmerSensor=async (req,res)=>{
    const numberOfDonateur=await Donateur.countDocuments();
    const donateur=await Donateur.find()
    const farmer=await Farmer.find({hasSensor:0}).sort({beehive:1,mail:-1})
    let collectedAmount=0;
    let farmerIndex=0;
    for(let i=0;i<numberOfDonateur;i++){
        collectedAmount+=donateur[i].donationAmount
        if(collectedAmount==1000){
            for(let j=0;j=i;j++){
                await Donateur.updateOne(
                    {mail:donateur[j].mail},
                    {$set :{donationAmount:0}},
                    (err,result)=>{
                        if(err) console.log(err)
                        console.log(result)
                    }
                )
            }
            await Farmer.updateOne(
                {mail:farmer[farmerIndex].mail},
                {$inc:{hasSensor:1}},
                (err,result)=>{
                    if(err) console.log(err);
                    console.log(result)
                }
            )
            await sendMail(farmer[farmerIndex].mail,farmer[farmerIndex].location)
            index++;
            collectedAmount=0;

        }
    }
    res.json({msg:"Sensor generated to farmer successfully ! "})

}
module.exports=giveFarmerSensor