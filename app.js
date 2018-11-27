const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries')

app.listen(port)

app.get("/", (req, res) => {
    queries.listAll().then(students => res.send(students))
})