// config/firebase.js
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
require("dotenv").config(); // load .env file

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyAXcAPMvurdYXDLrLy-3seGxi7ASIvGibE",
  authDomain: "rest-api-node-c7bde.firebaseapp.com",
  databaseURL: "https://rest-api-node-c7bde-default-rtdb.firebaseio.com",
  projectId: "rest-api-node-c7bde",
  storageBucket: "rest-api-node-c7bde.firebasestorage.app",
  messagingSenderId: "46270182727",
  appId: "1:46270182727:web:214a273429ac4dc0708862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Realtime Database instance
const db = getDatabase(app);

module.exports = db;




