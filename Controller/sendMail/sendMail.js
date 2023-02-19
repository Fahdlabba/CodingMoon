const nodemailer=require('nodemailer')
require('dotenv').config()
const sendMail=async (mail,localisation)=> {
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MAIL_NAME,
            pass :process.env.MAIL_PASS
        }
    })
    let mailOptions = {
        from: process.env.MAIL_NAME,
        to: mail,
        subject: 'congratulations Dear Farmer!',
        text: `We are glad to inform you that your turn has come we have your localisation : ${localisation}\n hoping you will receive your sensor in 3 OR 4 days from now for more infos check your account or contact us/n thank you! `,
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log('Email sent : '+info.response)
        }
    })
}


module.exports=sendMail
