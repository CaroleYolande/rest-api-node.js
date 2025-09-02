//routes/income.js
const express = require("express");
const { getIncome, addIncome, updateIncome, deleteIncome } = require("../controllers/incomeController");

const router = express.Router();

// GET all income records
router.get("/", getIncome);

// POST create a new income record
router.post("/", addIncome);

// PUT update an income record
router.put("/:id", updateIncome);

// DELETE remove an income record
router.delete("/:id", deleteIncome);

module.exports = router;
