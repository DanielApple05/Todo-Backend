const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/signUpControllers");
const { Login } = require("../controllers/signUpControllers");

// Signup route
router.post("/signup", signUp);

// Login route
router.post("/login", Login);

module.exports = router;