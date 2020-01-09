const Sequelize = require("sequelize");
const db = require("../db");
// const Joke = require("../jokes/model");

const Rating = db.define(
  "rating",
  {
    rating: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    tableName: "ratings"
  }
);

// Rating.belongsTo(Joke);

module.exports = Rating;
