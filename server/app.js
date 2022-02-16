require('dotenv').config()
const express = require('express');
const app = express()
const autheRouter = require('./routes/auth')


//* connect to the connectDB
const connectDB = require('./db/connect')

app.use(express.json())

app.use('/api/v1/auth',autheRouter)



const port = process.env.PORT || 5001;


const start =async  ()=>{
    try {
        await connectDB(process.env. MONGO_URI)
            app.listen(port,()=>{
        console.log(`server is listenig on port ${port}...`);
      })
    } catch (error) {
      console.log(error);
    }
  }
  start()