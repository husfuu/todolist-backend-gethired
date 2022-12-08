const router = require("express").Router();
const { checkSchema } = require("express-validator");
const { createTodoValidationsSchema, updateTodoValidationsSchema } = require("../validations/todo.validation");

const todoController = require("../controllers/todo.controller");

router.get("/todo-items", todoController.getAllTodos);
router.get("/todo-items/:id", todoController.getTodoById);
router.post("/todo-items", checkSchema(createTodoValidationsSchema), todoController.createTodo);
router.patch("/todo-items/:id", checkSchema(updateTodoValidationsSchema), todoController.updateTodoById);
router.delete("/todo-items/:id", todoController.deleteTodo);

module.exports = router;
