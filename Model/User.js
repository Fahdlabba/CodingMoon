const mongoose=require("mongoose")
const Schema=mongoose.Schema

const donation=new Schema({
    date:{
        type :Date,
        require:true
    }
})
const farmerSchema=new Schema({
    mail:{
        type:String,
        require :true,
    },
    pswd:{
        type :String ,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    location :{
        type:String,
        require:true,
    },
    beehiveNumber:{
        type:Number,
        require:true,
        default:0
    },
    hornetNumber:{
        type:Number,
        require:true,
        default:0
    },
    subscriptionType:{
        type:String,
        require:true,
        default:"",
    },
    hasSensor:{
        type:Number,
        require:true,
        default:0
    }

})
const donateurSchema=new Schema({
    mail:{
        type:String,
        require :true,
    },
    name:{
        type:String,
        require:true
    },
    pswd:{
        type :String ,
        require:true
    },
    donationAmount:{
        type:Number,
        require:true,
        default:0
    },
    donationHistory:[donation]
})

const Farmer=mongoose.model('Farmer',farmerSchema)
const Donateur=mongoose.model('Donateur',donateurSchema)
module.exports={
    Farmer,
    Donateur
}