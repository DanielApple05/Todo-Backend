const express = require("express");
const router = express.Router();
const { getTodos, createTodo, deleteTodo, toggleTodo } = require("../controllers/todoControllers");

// Define routes
router.get("/", getTodos);         // GET /todos
router.post("/", createTodo);        // POST /todos
router.delete("/:_id", deleteTodo); // DELETE /todos/:id
router.patch("/:_id", toggleTodo); // PATCH /todos/:id
module.exports = router;