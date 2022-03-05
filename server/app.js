require('dotenv').config()
const express = require('express');
const app = express()
const autheRouter = require('./routes/auth')
const blogRouter = require('./routes/blog')
const authentication = require('./middleware/authentication')
const cors = require("cors");
//* connect to the connectDB
const connectDB = require('./db/connect')

app.use(express.json())
app.use(cors());



app.use('/api/v1/auth',autheRouter)
app.use('/api/v1/blogs',authentication,blogRouter)





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