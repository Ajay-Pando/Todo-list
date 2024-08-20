const express = require("express");
const { createDB, createTbl, createTodoList, showTodoList, updateTodoList, deleteTodo, showSingleTodo } = require("../controllers/todoController");
const router = express.Router();

router.get('/createDB', createDB);
router.get('/createTbl', createTbl);
router.post('/create', createTodoList);
router.get('/display', showTodoList);
router.get('/show/:id', showSingleTodo);
router.put('/edit/:id', updateTodoList);
router.delete('/delete/:id', deleteTodo);

module.exports = router;