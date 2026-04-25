const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/authControllers");
const { Login } = require("../controllers/authControllers");

// Signup route
router.post("/signup", signUp);

// Login route
router.post("/login", Login);

module.exports = router;