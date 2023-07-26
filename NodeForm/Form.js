const express = require("express");
const bodyParser = require("body-parser")

const hostname = '127.0.0.1';
const port = 4000;
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/form.html");
})
app.post("/display", function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var id = req.body.id;
    var age = req.body.age;
    res.send(`<h3>Name is : ${fname}<h3/>
    <h3>Surname is : ${lname}<h3/>
    <h3>ID is : ${id}<h3/>
    <h3>Age is : ${age}<h3/>`);
});

app.listen(4000, function () {
    console.log(`server is running on http://${hostname}:${port}/`);
})