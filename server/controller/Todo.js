const model = require("../models");

//get todos
exports.getTodos = async (_, res) => {
  //   const todos = await model.Todo.findAll();
  //   console.log(todos);
  try {
    const todos = await todo.findAll();
    res.send({ result: true, data: todos });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};

//post todo
exports.postTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const data = await Todo.create({
      title,
    });
    console.log(data.dataValues);
    res.send({ result: true, data: data.todo.dataValues });
  } catch (error) {
    res.send({ result: false });
  }
};

//patch todo
exports.patchTodo = (req, res) => {
  try {
    const { title, done } = req.body;
    console.log(req.params);
    Todo.update(
      {
        title,
        done,
      },
      {
        where: {
          id: Number(req.params.todoId),
        },
      }
    );
  } catch (error) {
    res.send({ result: false });
  }
  // req.body.title, req.body.done
};

//delete todo
exports.deleteTodo = (req, res) => {
  try {
    Todo.destroy({
      where: {
        id: Number(req.params.todoId),
      },
    });
    res.send({ result: true });
  } catch (error) {
    res.send({ result: false });
  }
};
