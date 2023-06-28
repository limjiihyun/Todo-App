// const todoCtrl = require("../controller/todoctrl");
// const router = require("express").Router();

const express = require("express");
const router = express.Router();
const todoCtrl = require("../controller/todoctrl");

// api/todo/
//router.route("/").get(todoCtrl.getTodos).post(todoCtrl.insertTodo);

router.route("/").get(todoCtrl.getTodos);
router.route("/").post(todoCtrl.insertTodo);

router.route("/").patch(todoCtrl.patchTodo);
router.route("/").delete(todoCtrl.deleteTodo);

// router.get("/todos", todoCtrl.getTodos);
// router.post("/todo", todoCtrl.insertTodo);
// router.patch("/todo/:todoId", todoCtrl.patchTodo);
// router.delete("/todo/:todoId", todoCtrl.deleteTodo);

module.exports = router;
