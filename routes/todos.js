const express = require("express");
const router = express.Router();
const { getTodos, createTodo, deleteTodo, toggleTodo } = require("../controllers/todoControllers");
const protect = require("../middleware/authMiddleware");

// Define routes
router.get("/", protect, getTodos);         // GET
router.post("/", protect, createTodo);        // POST
router.delete("/:_id", deleteTodo); // DELETE
router.patch("/:_id", toggleTodo); // PATCH 
module.exports = router;