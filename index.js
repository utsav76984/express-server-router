const express = require("express");

const app = express();

console.log(app);

let port = 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

//simple get request

app.get("/", (req, res) => {
    res.send("you are in home page");
});

//A path in Express.js is the URL endpoint that defines where a client request should go on the server

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;

    let htmlstr = `
        <h1>Hello ${username}, your id is ${id}</h1>
        <p>You are in home page</p>
    `;
    res.send(htmlstr);
});000
