//routes/users.js
const express = require("express");
const { getUsers, addUser, updateUser, deleteUser } = require("../controllers/usersController");

const router = express.Router();

// GET all users
router.get("/", getUsers);

// POST create a new user
router.post("/", addUser);

// PUT update a user
router.put("/:id", updateUser);

// DELETE remove a user
router.delete("/:id", deleteUser);

module.exports = router;


