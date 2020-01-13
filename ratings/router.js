const express = require("express");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres"
});
const { Router } = express;
const router = new Router();
const Rating = require("./model");
const Joke = require("../jokes/model");

console.log("ratings router");

router.post("/ratings", async (req, res, next) => {
  console.log("REQ ", req.body);
  const rating = req.body;
  const jokeId = rating.jokeId;
  try {
    await Rating.create(rating);
    const ratings2avgRaw = await Rating.findAll({
      where: { jokeId },
      attributes: ["rating"]
    });
    const ratings2avg = ratings2avgRaw.map(item => item.rating);
    const ratingsAvg =
      ratings2avg.reduce((acc, curr) => acc + curr) / ratings2avg.length;
    const joke2Update = await Joke.findByPk(jokeId);
    await joke2Update.update({
      avgRating: ratingsAvg,
      nrRatings: ratings2avg.length
    });
    console.log("ratings to average: ", ratings2avg);
    console.log("nr ratings ", ratings2avg.length);
    console.log("Ratings avg ", ratingsAvg);
    res.status(200).send({ message: "rating added", ratingsAvg });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
