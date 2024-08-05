const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = {
    "/billing": "http://localhost:5001",
    "/product": "http://localhost:5002",
    "/user": "http://localhost:5003",
}

for (const route in routes) {
    console.log(route)
    const target = routes[route]
    app.use(route, createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: function (path, req) {
            return route.concat(path)
        }
    }))
}

let port = 5000
app.listen(port, async () => {
    console.log(`Api registry is running on ${port}`)
})

