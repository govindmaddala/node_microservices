const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/product", (req,res)=>{
    res.json({
        message: "From Products"
    })
})

let port = 5002
app.listen(port, async () => {
    console.log(`Products is running on ${port}`)
})