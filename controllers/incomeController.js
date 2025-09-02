//incomeController.js
// // Import our Firebase connection
const db = require("../config/firebase");

// GET /income → Retrieve all income records
const getIncome = (req, res) => {
  db.ref("income").once("value", (snapshot) => {
    if (snapshot.exists()) {
      res.json(snapshot.val()); // Send all income data
    } else {
      res.status(404).json({ message: "No income data found" });
    }
  }, (error) => {
    res.status(500).json({ message: error.message });
  });
};

// POST /income → Add a new income record
const addIncome = (req, res) => {
  const { wages, secondary_income, Interest, support_payment, others } = req.body;

  // Validate required fields
  if (wages === undefined || secondary_income === undefined) {
    return res.status(400).json({ message: "Missing required income fields" });
  }

  // Create a new unique reference in "income" collection
  const newIncomeRef = db.ref("income").push();

  // New income object
  const newIncome = {
    id: newIncomeRef.key, // Firebase auto-generated ID
    wages,
    secondary_income,
    Interest,
    support_payment,
    others
  };

  // Save the income in Firebase
  newIncomeRef.set(newIncome, (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(201).json({ message: "Income record added successfully", income: newIncome });
    }
  });
};

// PUT /income/:id → Update an existing income record
const updateIncome = (req, res) => {
  const incomeId = req.params.id; // Get ID from URL
  const updates = req.body; // Get updated fields

  db.ref(`income/${incomeId}`).update(updates, (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json({ message: "Income updated successfully" });
    }
  });
};

// DELETE /income/:id → Remove an income record
const deleteIncome = (req, res) => {
  const incomeId = req.params.id;

  db.ref(`income/${incomeId}`).remove((error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json({ message: "Income deleted successfully" });
    }
  });
};

// Export functions so routes can use them
module.exports = { getIncome, addIncome, updateIncome, deleteIncome };
