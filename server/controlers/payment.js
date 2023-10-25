const axios = require("axios")
const API_KEY = "650b025c98aff9140f6e616f:ZboIUR7SdBSRnGxbo4uDoB"

module.exports = {
    payments : async(req,res) => {
        try {
            const response =await axios.post("https://api.konnect.network/api/v2/payments/init-payment",
            req.body,
            {
                headers:{
                    "x-api-key":API_KEY
                }
            }

            )
            res.json(response.data)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}