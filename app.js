const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.listen(port)

app.get("/", (req, res) => {
    queries.listAll().then(students => res.send(students[0]))
})

app.post("/", (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students))
})

app.get("/:id", (req, res) => {
    queries.getById(req.params.id).then(student => res.send(student[0]))
}) 