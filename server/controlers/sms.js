const accountSid = 'AC28683997cb2611af84a83ad7e73f1fb0';
const authToken = 'f9661082df0bd0f9ff4192e328402b6a';
const client = require('twilio')(accountSid, authToken);

module.exports= {
    sendSms:(req,res)=>{
        client.messages
    .create({
        body:"welcome",
                from: '+18594497712',
        to: '+21626608648'
    })
    .then(message =>
        res.status(200).send({msg:"OK",message})
        ).carch (error =>
            res.status(500).send(error))
    
    }
}
