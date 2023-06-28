const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//const router = require("./routes/todo");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true }));
app.use(express.json());
app.use(cors());

const PORT = 4000;
//PORT
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});


app.use("/todos", require("./routes/todoRouter"));
app.use("/todos", require("./routes/todoRouter"));
app.use("/todo/:todoId", require("./routes/todoRouter"));
app.use("/todo/:todoId", require("./routes/todoRouter"));

// app.use("/api/todo", require("./routes/todoRouter"));

// app.use("/api/todo", require("./routes/todoRouter"));

// app.use("/api/todo", require("./routes/todoRouter"));

//app.use("/api", router);
