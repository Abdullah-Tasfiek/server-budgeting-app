const express = require("express");
const app = express();
const cors = require("cors");
const transactionsController = require("./Controllers/transactions.controller");

app.use(cors());
app.use(express.json());
app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome to my budgeting app");
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
