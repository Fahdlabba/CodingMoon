const express=require("express")
const cookieParser = require('cookie-parser')
const logout=require('../Controller/logout')
require("../Database/db")();
const serveur=(app)=>{
    //MiddelWare
    app.use(require("../Middleware/limiteWindows"))
    app.use(express.json())
    app.use(cookieParser())
    app.use(express.urlencoded({extended:true}))
    //Router 
    app.use('/donateur',require("../Router/donateur"))
    app.use('/farmer',require("../Router/farmer"))
    app.use('/logout',logout)
    // PORT
    app.listen(5000,()=>{
        console.log("Connected")
    })
}
module.exports=serveur