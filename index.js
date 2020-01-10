const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");

const jokeRouter = require("./jokes/router");
const ratingsRouter = require("./ratings/router");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(jokeRouter);
app.use(ratingsRouter);

const port = process.env.PORT || 4000;

app.listen(
  port,
  console.log(`App is listening intently on port number ${port}`)
);

app.get("/", (_, res) => res.send("<h1 style='color:red'>RED = WORKING.</h1>"));
