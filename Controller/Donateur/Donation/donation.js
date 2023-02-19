require("dotenv").config()
const stripe=require("stripe")(process.env.STRIPE_KEY)

const payment=async (req,res)=>{
    const mail=req.query.mail
    try{
        const session =await stripe.checkout.sessions.create({
            line_items:[{
                price_data:{
                    currency:'usd',
                    product_data:{
                        name:"Bees"
                    },
                    unit_amount:500,
                },
                quantity:1,
            }],
            mode:"payment",
            success_url:`http://localhost:5000/donateur/payment/succes?mail=${mail}`
        })
        res.json(session.url)
    }catch(err){
        res.status(406).json({error: err.message})
    }
}
module.exports=payment