let express = require('express');

module.exports = async (app) => {
  let burger = await (require("../models/burger.js")());

  return express.Router()
    // View
    .get("/", (_, res) => burger.all().then((burgers) => res.render("index", { burgers })))

    // Public controller interface
    .get("/api", (req, res) => burger.all(req.body).then((burgers) => res.json(burgers)))
    .post("/api", (req, res) => burger.create(req.body).then(() => res.end()))
    .put("/api", (req, res) => burger.devour(req.body).then(() => res.end()))

    // "Private" reset button
    .delete("/api/reset", async (req, res) => {
      await burger.clear(req.body);

      await Promise.all(
        ["Beef Burger", "Trout Burger", "Human Burger"]
          .map((name) => burger.create({ name })));

      res.end();
    })
}