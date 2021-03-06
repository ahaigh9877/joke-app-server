const express = require("express");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres"
});
const { Router } = express;
const router = new Router();
const Joke = require("./model");

router.get("/randomjoke", async (req, res, next) => {
  try {
    const randomJoke = await Joke.findOne({ order: sequelize.random() });
    res.status(200).send(randomJoke);
  } catch (error) {
    next(error);
  }
});

router.get("/alljokes", async (req, res, next) => {
  try {
    const allJokes = await Joke.findAll();
    res.status(200).send(allJokes);
  } catch (error) {
    next(error);
  }
});

router.post("/addjoke", async (req, res, next) => {
  console.log("add joke req body ", req.body);
  const joke = req.body;
  try {
    await Joke.create(joke);
    res.status(200).send({ message: "joke added to database" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
