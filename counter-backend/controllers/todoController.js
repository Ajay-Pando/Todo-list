const db = require("../database/db");

exports.createDB = (req, res) => {
  let q = "CREATE DATABASE todolist";
  db.query(q, (err, result) => {
    if (err) throw err;
    return res.status(201).json("Database created");
  });
};

exports.createTbl = (req, res) => {
  let q =
    "CREATE TABLE todoitem(id int AUTO_INCREMENT, description VARCHAR(300), PRIMARY KEY(id))";
  db.query(q, (err, result) => {
    if (err) throw err;
    return res.status(201).json("Table created");
  });
};

exports.createTodoList = (req, res) => {
  let q = "INSERT INTO todo SET ?";
  const { description } = req.body;
  db.query(q, { description }, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

exports.showTodoList = (req, res) => {
  let q = "SELECT * FROM todo";
  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

exports.showSingleTodo = (req, res) => {
  let q = `SELECT * FROM todo where id=${req.params.id}`;
  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result[0]);
  });
};

exports.updateTodoList = (req, res) => {
  const { description } = req.body;
  let q = `UPDATE todo SET ? where id=${req.params.id}`;
  db.query(q, {description},(err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

exports.deleteTodo = (req, res) => {
  let q = `DELETE FROM todo where id=${req.params.id}`;
  db.query(q,(err, result) => {
    if (err) return res.json(err);
    return res.status(200).json({data: "Todo deleted"});
  });
};
