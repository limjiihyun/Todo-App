const todoCtrl = require("../controller/todoctrl");
const router = require("express").Router();

// api/todo/
router.route("/").get(todoCtrl.getTodos).post(todoCtrl.insertTodo);

// router.get("/todos", todoCtrl.getTodos);
// router.post("/todo", todoCtrl.insertTodo);
// router.patch("/todo/:todoId", todoCtrl.patchTodo);
// router.delete("/todo/:todoId", todoCtrl.deleteTodo);

module.exports = router;
