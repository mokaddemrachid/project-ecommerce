// const router=require("express").Router()
// const payment = require("../controlers/payment")

// router.post('/api/payment', payment.payments)

// module.exports = {paymentRouter:router}

const express = require("express")
const Stripe = require ('stripe');
const stripe = Stripe('sk_test_51O56CVLzJmOq6cg27ldAx8Ded71ryRe3j539E6eqEYgGzNJ3Tvzy1F9yoydPKA1ccsDQWFfDcywDeA8HHB55judi00jGkZPXvw')

const paymentRouter=express.Router()

paymentRouter.post('/create-checkout-session', async(req,res)=>{
    console.log(req.body)
    const line_items=req.body.products.map(item=>{
        return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: item.product.name,
                        description: item.product.description,
                        images:[item.product.image],
                        metadata:{
                            id:item.product._id,
                        }
                    },
                    unit_amount: item.product.price*100, 
                },
                quantity: item.count,
            }
        
    })
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send({url:session.url });
})
module.exports= paymentRouter