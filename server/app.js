require('dotenv').config()
const express = require('express');
const app = express()



//* connect to the connectDB
const connectDB = require('./db/connect')



app.get('/api/v1/blog',(req,res)=>{
    res.send('tesst')
})



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