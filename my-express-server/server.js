const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at Umida@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Umida. I am 24. I love coding and reading. I live in a lovely house with my husband in the centre of Melbourne.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>coffee</li><li>books</li><li>legos</li></ul>")
})

app.listen(3000, function(){
    console.log("The server is running on port 3000");
});