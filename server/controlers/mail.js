const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "rachidmokaddem068@gmail.com",
      pass: "kjnw syws sxgp nqan",
    },
  });
  transporter.verify((error,success)=>{
    if(error){
        console.log(error)
    }else if(success){
        console.log("server ready to send mail")
    }
  })

  const sendmail =(async(req,res)=>{
    console.log(req.body)
    try {
       await transporter.sendMail({
        
            from:req.body.email,
            to:"rachidmokaddem068@gmail.com",
            subject:req.body.subject,
            html:`<h1> ${req.body.text}</h1>`
          })

          res.status(200).send("mail sent")
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports={sendmail}