const Sequelize = require("sequelize");
const db = require("../db");
const Rating = require("../ratings/model");

const Joke = db.define(
  "joke",
  {
    setup: {
      type: Sequelize.STRING
    },
    punchline: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: "jokes"
  }
);

Joke.hasMany(Rating);

module.exports = Joke;

// const seedJokes = [
//   {
//     setup: "How did the programmer die in the shower?",
//     punchline: "He read the shampoo bottle instructions: Lather. Rinse. Repeat."
//   },
//   {
//     setup: "How many programmers does it take to change a light bulb?",
//     punchline: "None – It’s a hardware problem"
//   },
//   {
//     setup: "Why do programmers always mix up Halloween and Christmas?",
//     punchline: "Because Oct 31 equals Dec 25."
//   },
//   {
//     setup: "A programmer walks to the butcher shop and buys a kilo of meat. ",
//     punchline:
//       "An hour later he comes back upset that the butcher shortchanged him by 24 grams."
//   },
//   {
//     setup: "Have you heard about the new Cray super computer?",
//     punchline: "It’s so fast, it executes an infinite loop in 6 seconds."
//   }
// ];

// Joke.bulkCreate(seedJokes);
