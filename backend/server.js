const express = require('express');
const products = require("./data/nproducts");
const app = express()

app.get("/", (req,res) => {
    res.send(`<h1> Welcome to Node Server</h1>`)

});

app.get("/products", (req, res) => {
res.json(products);
});

app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    res.json(product);
})

const PORT = 8080

app.listen(8080, () => {console.log("Server running on Port 8080");

});