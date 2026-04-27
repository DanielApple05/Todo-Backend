const express = require("express");
const router = express.Router();
const { getTodos, createTodo, deleteTodo, toggleTodo } = require("../controllers/todoControllers");
const protect = require("../Middleware/authMiddleware");

// Define routes
router.get("/", protect, getTodos);         // GET
router.post("/", protect, createTodo);        // POST
router.delete("/:id", protect, deleteTodo); // DELETE
router.patch("/:id", protect, toggleTodo); // PATCH 
module.exports = router;