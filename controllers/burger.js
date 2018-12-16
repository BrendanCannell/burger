let express = require('express');

module.exports = async () => {
  let burger = await require("../models/burger.js")();
  let logErrors = (fn) => (req, res) =>
      fn(req, res).catch((e) => console.log(e) || res.sendStatus(500));

  return express.Router()
    // Public controller interface
    .get("/api", logErrors(async (req, res) => res.json(await burger.all(req.body))))
    .post("/api", logErrors(async (req, res) => await burger.create(req.body) && res.end()))
    .put("/api", logErrors(async (req, res) => await burger.devour(req.body) && res.end()))

    // "Private" reset button
    .delete("/api/reset", async (req, res) => {
      await burger.clear(req.body);

      await Promise.all(
        ["Beef Burger", "Trout Burger", "Human Burger"]
          .map((name) => burger.create({ name })));

      res.end();
    })

    // Views
    .get("/", async (req, res) => res.render("index", { burgers: await burger.all() }))
    .get("*", async (req, res) => res.redirect("/"))
}