//index.js
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const app = express(); //to create my express app

app.use(express.json());

// Simple homepage route to describe the API
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to My Budget API",
    endpoints: [
      { users: "/users" },
      { income: "/income" },
      { expenses: "/expenses" }
    ]
  });
});

// Import route files
const userRoutes = require("./routes/users");
const incomeRoutes = require("./routes/income");
const expenseRoutes = require("./routes/expenses");

// Tell Express to use these routes
app.use("/users", userRoutes);
app.use("/income", incomeRoutes);
app.use("/expenses", expenseRoutes);

// Decide which port to run the app on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});