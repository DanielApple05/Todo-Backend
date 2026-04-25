const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/signUpControllers");

// Signup route
router.post("/signup", signUp);

module.exports = router;