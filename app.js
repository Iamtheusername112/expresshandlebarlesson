const express = require("express");
const app = express();

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (require, response) => {
  const Ironhack = {
    name: "Francis iwu",
    campus: "Berlin",
    nationality: "Nigerian",
    bootcamp: "<span>Ironhack Web Dev</span>",
  };
  response.render("index", Ironhack);
});

app.get("/about", (require, response) => {
  response.render("about");
});

app.listen(3000, () => {
  console.log("Your Engine has started!!");
});
