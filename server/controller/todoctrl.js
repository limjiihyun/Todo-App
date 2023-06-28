const connection = require("../dbConfig");
const model = require("../models");

// const todoCtrl = {
//   getTodos: async (req, res) => {
//     connection.query(`SELECT * FROM todo`, (error, rows) => {
//       if (error) throw error;
//       console.log(rows);
//       res.send(rows);
//     });
//   },
//   insertTodo: async (req, res) => {
//     //javascript 구조 분해 할당
//     const { id, title, done } = req.body;
//     const sql = `INSERT INTO todo(id, title, done)
//     VALUES(${id}, '${title}', ${done});`;
//     connection.query(sql, (error, rows) => {
//       if (error) throw error;
//       res.send(rows);
//     });
//   },
// };

exports.getTodos = async (_, res) => {
  connection.query(`SELECT * FROM todo`, (error, rows) => {
    if (error) throw error;
    console.log(rows);
    res.send(rows);
  });
};

exports.insertTodo = async (req, res) => {
  //javascript 구조 분해 할당
  const { id, title, done } = req.body;
  const sql = `INSERT INTO todo(id, title, done)
      VALUES(${id}, '${title}', ${done});`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};

exports.patchTodo = async (req, res) => {
  // JavaScript 구조 분해 할당
  const { id, title, done } = req.body;
  console.log(req.params);
  const sql = `UPDATE todo
    SET title = '${title}', done = ${done}
    WHERE id = ${id};`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  const sql = `DELETE FROM todo WHERE id = ${id}`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};

// exports.patchTodo = (req, res) => {
//   try {
//     const { title, done } = req.body;
//     console.log(req.params);
//     Todo.update(
//       {
//         title,
//         done,
//       },
//       {
//         where: {
//           id: Number(req.params.todoId),
//         },
//       }
//     );
//   } catch (error) {
//     res.send({ result: false });
//   }
//   // req.body.title, req.body.done
// };

// //delete todo
// exports.deleteTodo = (req, res) => {
//   try {
//     Todo.destroy({
//       where: {
//         id: Number(req.params.todoId),
//       },
//     });
//     res.send({ result: true });
//   } catch (error) {
//     res.send({ result: false });
//   }
// };

//   patchTodo: async (req, res) => {
//     //javascript 구조 분해 할당
//     const { id, title, done } = req.body;
//     const sql = `UPDATE todo SET (${id}, '${title}', ${done});`;
//     connection.query(sql, (error, rows) => {
//       if (error) throw error;
//       res.send(rows);
//     });
//   },
//   deleteTodo: async (req, res) => {
//     //javascript 구조 분해 할당
//     const { id, title, done } = req.body;
//     const sql = `DELETE FROM todo WHERE ${id} = ?`;
//     connection.query(sql, (error, rows) => {
//       if (error) throw error;
//       res.send(rows);
//     });
//   },
//};

// module.exports = todoCtrl;
