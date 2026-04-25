const express = require("express");
const router = express.Router();
const { getTodos, createTodo, deleteTodo, toggleTodo } = require("../controllers/todoControllers");

// Define routes
router.get("/", getTodos);         // GET
router.post("/", createTodo);        // POST
router.delete("/:_id", deleteTodo); // DELETE
router.patch("/:_id", toggleTodo); // PATCH 
module.exports = router;