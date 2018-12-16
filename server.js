require('dotenv').config();

let express = require("express");
let exphbs = require("express-handlebars");

let app = express()
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.static("public"))
  .engine("handlebars", exphbs({ defaultLayout: "main" }))
  .set("view engine", "handlebars");

async function main() {
  let PORT = process.env.PORT || 8080;

  app
    .use(await require("./controllers/burger.js")())
    .listen(PORT, () => console.log("App listening on PORT " + PORT));
}

main();