const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/user", (req,res)=>{
    res.json({
        message: "From users"
    })
})

let port = 5003
app.listen(port, async () => {
    console.log(`Users is running on ${port}`)
})