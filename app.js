const express = require("express")

const app = express()

const port = 5000

app.get('/home', (req, res) =>{
    res.send("Hello, i am home page")
})

app.get('/about', (req, res) =>{
    res.send("this is About page")
})

app.get('user/:121', (req, res) =>{
    res.send("you searched for 121")
})

app.listen(port,()=>{
    console.log("Server Start and running Succesfully")
})