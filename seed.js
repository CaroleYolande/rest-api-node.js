// seed.js
const { database } = require("./config/firebase");

// Your sample user data
const userData = {
  name: "Femi Ola",
  username: "Femi",
  email: "oluwafemi@sozentech.com",
  address: {
    street: "Panatella Drive",
    suite: "Apt. 556",
    city: "Calgary",
    zipcode: "T3I 3W2"
  }
};

const incomeData = {
  wages: 1400,
  secondary_income: 700,
  Interest: 120,
  support_payment: 40,
  others: 100
};

const expenseData = {
  Savings: {
    RRSP: "1000$",
    "Investment Savings": 4000,
    "Long-term savings": "5000$",
    Bonds: 200,
    others: 500
  },
  "Payment Obligations": {
    "credit card": 500,
    Loan: 6000,
    "vehicle lease": 200,
    "Line of credit": 1000,
    others: 300
  },
  Insurance: {
    "life insurance": 400,
    "health insurance": 600,
    others: 300
  },
  Housing: {
    Rent: 600,
    "rent insurance": 400,
    "storage and parking": 500,
    utilities: 200,
    maintenance: 100
  },
  Utilities: {
    phone: 60,
    Internet: 300,
    water: 400,
    Heat: 100,
    Electricity: 400,
    Cable: 200,
    others: 150
  },
  Personal: {
    transportation: 50,
    clothing: 60,
    "gifts - family": 40,
    "Personal grooming": 100,
    "drinking out": 300,
    Hobbies: 200,
    others: 60
  }
};

async function seedData() {
  try {
    // Add sample user, income and expenses to the database.
    const userRef = await database.ref("users").push(userData);
    const incomeRef = await database.ref("income").push(incomeData);
    const expenseRef = await database.ref("expenses").push(expenseData);

    console.log("Sample data added with IDs:");
    console.log("User ID:", userRef.key);
    console.log("Income ID:", incomeRef.key);
    console.log("Expense ID:", expenseRef.key);

    process.exit(); // End the script
  } catch (error) {
    console.error("Error adding sample data:", error);
    process.exit(1);
  }
}

seedData();
