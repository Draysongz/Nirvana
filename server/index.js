const express= require('express');
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const courseRoute = require('./routes/courses')
const cors= require('cors')

dotenv.config({path: 'config.env'})

let port = process.env.PORT || 8080


mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Db connected sucessfully'))
.catch(err=> console.log(err))


app.use(cors)
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/courses", courseRoute)

app.listen(port, ()=>{
    console.log(`your server is now running in ${port}`)
})