const Todo = require("../models/Todo");

// GET all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

// CREATE todo
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      text: req.body.text,
      user: req.user, // from authMiddleware
    });

    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE todo
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params._id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TOGGLE todo
const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params._id);

    todo.isComplete = !todo.isComplete;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  toggleTodo,
};