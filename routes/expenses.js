// routes/expenses.js
const express = require("express");
const { getExpenses, addExpense, updateExpense, deleteExpense } = require("../controllers/expensesController");

const router = express.Router();

// GET all expense records
router.get("/", getExpenses);

// POST create a new expense record
router.post("/", addExpense);

// PUT update an expense record
router.put("/:id", updateExpense);

// DELETE remove an expense record
router.delete("/:id", deleteExpense);

module.exports = router;
