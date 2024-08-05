const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/billing", (req,res)=>{
    res.json({
        message: "From billing"
    })
})

let port = 5001
app.listen(port, async () => {
    console.log(`Billing App is running on ${port}`)
})