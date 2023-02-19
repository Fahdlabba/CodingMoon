const {check,validationResult}=require('express-validator')

const signInValidatorD=async (req,res,next)=>{
    await check('donateurMail').isEmail().run(req);
    await check('donateurPswd').isLength({min :8}).run(req);
    const result=validationResult(req)
    if(!result.isEmpty()){
        return res.json({msg:result.errors})
    }
    next()
}

const signInValidatorF=async (req,res,next)=>{
    await check('farmerMail').isEmail().run(req);
    await check('farmerPswd').isLength({min :8}).run(req);
    const result=validationResult(req)
    console.log(result)
    if(!result.isEmpty()){
        return res.json({msg:result.errors})
    }
    next()
}


module.exports={
    signInValidatorD,
    signInValidatorF
}