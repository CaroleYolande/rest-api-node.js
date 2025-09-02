//expensesController.js
// Import our Firebase connection
const db = require("../config/firebase");

// GET /expenses → Retrieve all expense records
const getExpenses = (req, res) => {
  db.ref("expenses").once("value", (snapshot) => {
    if (snapshot.exists()) {
      res.json(snapshot.val()); // Send all expense data
    } else {
      res.status(404).json({ message: "No expenses found" });
    }
  }, (error) => {
    res.status(500).json({ message: error.message });
  });
};

// POST /expenses → Add a new expense record
const addExpense = (req, res) => {
  const expenseData = req.body;

  // Basic validation: make sure something is sent
  if (!expenseData || Object.keys(expenseData).length === 0) {
    return res.status(400).json({ message: "Expense data is required" });
  }

  // Create a new unique reference in "expenses" collection
  const newExpenseRef = db.ref("expenses").push();

  // New expense object (spread to keep all nested fields from request)
  const newExpense = {
    id: newExpenseRef.key, // Firebase auto-generated ID
    ...expenseData
  };

  // Save the expense in Firebase
  newExpenseRef.set(newExpense, (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(201).json({ message: "Expense record added successfully", expense: newExpense });
    }
  });
};

// PUT /expenses/:id → Update an existing expense record
const updateExpense = (req, res) => {
  const expenseId = req.params.id; // Get ID from URL
  const updates = req.body; // Get updated fields

  db.ref(`expenses/${expenseId}`).update(updates, (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json({ message: "Expense updated successfully" });
    }
  });
};

// DELETE /expenses/:id → Remove an expense record
const deleteExpense = (req, res) => {
  const expenseId = req.params.id;

  db.ref(`expenses/${expenseId}`).remove((error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json({ message: "Expense deleted successfully" });
    }
  });
};

// Export functions so routes can use them
module.exports = { getExpenses, addExpense, updateExpense, deleteExpense };
