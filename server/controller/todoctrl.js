const connection = require("../dbConfig");

const todoCtrl = {
  getTodos: async (req, res) => {
    connection.query(`SELECT * FROM todo`, (error, rows) => {
      if (error) throw error;
      console.log(rows);
      res.send(rows);
    });
  },
  insertTodo: async (req, res) => {
    //javascript 구조 분해 할당
    const { id, title, done } = req.body;
    const sql = `INSERT INTO todo(id, title, done)
    VALUES(${id}, '${title}', ${done});`;
    connection.query(sql, (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },
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
};

module.exports = todoCtrl;
