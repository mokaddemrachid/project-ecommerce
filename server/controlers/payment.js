// const axios = require("axios")
// const API_KEY = "650b025c98aff9140f6e616f:ZboIUR7SdBSRnGxbo4uDoB"

// module.exports = {
//     payments : async(req,res) => {
//         try {
//             const response =await axios.post("https://api.konnect.network/api/v2/payments/init-payment",
//             req.body,
//             {
//                 headers:{
//                     "x-api-key":API_KEY
//                 }
//             }

//             )
//             res.json(response.data)
//         } catch (error) {
//             res.status(500).send(error)
//         }
//     }
// }

const api_key = require('../configurationDB/config');
const stripe = require("stripe")(api_key.stripePayment);


exports.stripePayment=(req,res)=>{

    let {amount,id} = req.body;
    console.log(amount,id);

    stripe.paymentIntents.create({
        amount:amount,
        payment_method: id,
        confirm: true,
    }).then(response=>{
        console.log(response);
            res.status(200).json({
            message:"payment successful",
            success:true})}
    )
    .catch(err=>{
        console.log(err);
        res.json({
            message: "Payment Failed",
            success: false,})
    })
}