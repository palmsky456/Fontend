const express = require('express');
const app = express();
const router = require('./router')
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
});

app.use("/api",router);


app.listen(5000,()=>{
  console.log('Listening to port 5000!');
});