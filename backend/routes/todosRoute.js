'use server'
import express from 'express';
const router = express.Router();
import {getTodos,createTodos} from '../controller/todosController.js';

router.get('/all',getTodos);
router.post('create',createTodos);

export default router;