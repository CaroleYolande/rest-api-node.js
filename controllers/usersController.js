// controllers/usersController.js
// This controller handles all USER operations (GET, POST, PUT, DELETE)

const db = require("../config/firebase");
const { ref, get, set, update, remove, push } = require("firebase/database");


const getUsers = async (req, res) => {
  try {
    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);

    if (snapshot.exists()) {
      res.json(snapshot.val());
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    res.status(500).json({ message: `Error getting users: ${error.message}` });
  }
};

// POST a new user
const addUser = async (req, res) => {
  try {
    const newUserRef = push(ref(db, "users")); // Create unique location

    const userData = {
      id: newUserRef.key, // Auto ID from Firebase
      ...req.body         // Copy all fields from request
    };

    await set(newUserRef, userData); // Save user
    res.status(201).json({ message: "User added", user: userData });
  } catch (error) {
    res.status(500).json({ message: `Error adding user: ${error.message}` });
  }
};

// PUT (update) a user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // ID in URL
    await update(ref(db, `users/${id}`), req.body);
    res.json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ message: `Error updating user: ${error.message}` });
  }
};

// DELETE a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await remove(ref(db, `users/${id}`));
    res.json({ message: "🗑️ User deleted" });
  } catch (error) {
    res.status(500).json({ message: `Error deleting user: ${error.message}` });
  }
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
