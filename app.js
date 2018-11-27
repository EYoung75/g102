const express = require("express");
const app = express();
const port = 3000;
const queries = require('./queries')

app.listen(port, () => console.log(`Listening on port ${port}!`))

app.get("/", (req, res) => {
    queries.listAll().then(students => res.send(students))
})