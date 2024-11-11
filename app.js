
const express = require("express") 

const app = express()

const port = 5000

app.get('/apple', (req, res)=>{
    res.send("apple is red in color")
})

app.listen(port,()=>{
 console.log("Server start and running succesfully")
})

