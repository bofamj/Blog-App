const express = require('express');
const app = express()




app.get('/api/v1/blog',(req,res)=>{
    res.send('tesst')
})







app.listen(5001,()=>{
    console.log('app is listening on port 5001.....');
})