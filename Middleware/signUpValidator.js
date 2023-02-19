const {check,validationResult}=require('express-validator')
const signUpValidatorD=async(req,res,next)=>{
    await check('donateurMail').isEmail().run(req);
    await check('donateurPswd').isLength({min :8}).run(req);
    await check('confirmPswd').isLength({min : 8}).custom((value,{req})=>{
        if(value!=req.body.password) return false 
        return true
    }).run(req)
    const result=validationResult(req)
    if(result.isEmpty()){
        return res.json({msg:result.errors})
    }
    next()
}
const signUpValidatorF=async(req,res,next)=>{
    await check('farmerMail').isEmail().run(req);
    await check('farmerPswd').isLength({min :8}).run(req);
    await check('confirmPswd').isLength({min : 8}).custom((value,{req})=>{
        if(value!=req.body.password) return false 
        return true
    }).run(req)
    await check("beesNumber").isAlphanumeric().run(req)
    const result=validationResult(req)
    if(result.isEmpty()){
        return res.json({msg:result.errors})
    }
    next()
}
module.exports={
    signUpValidatorD,
    signUpValidatorF

}