const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../Models/transaction");

//Index
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//Show
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    res.send(transactionsArray[id]);
  } else {
    res.redirect("*");
  }
});

//Create
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

//Update
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  transactionsArray[id] = req.body;
  res.send(transactionsArray[id]);
});

//Delete
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  transactionsArray.splice(id, 1);
  res.send(transactionsArray);
});

module.exports = transactions;
