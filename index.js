const express = require("express")
const cors = require('cors')
const port = 7000

const {postRouter} = require('./server/routers/postRouter')
const {userRouter} = require("./server/routers/userRouter")
const {mailRouter} = require('./server/routers/mailRouter')
const {paymentRouter} = require('./server/routers/paymentRouter')
const {smsRouter} = require('./server/routers/smsRouter')

const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    optionsSuccessStatus:200
}))

const connectDB = require('./server/configurationDB/config')
connectDB()

app.use(express.json())
app.use('/', postRouter)
app.use('/', userRouter)
app.use('/', mailRouter)
app.use('/', paymentRouter)
app.use('/', smsRouter)

app.listen(port, () => {
    console.log("server run")
})