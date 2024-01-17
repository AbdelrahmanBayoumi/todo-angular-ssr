import express, { Router } from 'express';
import * as todoController from '../controllers/todo.controller';

const router: Router = express.Router();

// Define API routes for CRUD operations on todos
router.get('/', todoController.getTodos);
router.post('/', todoController.addTodo);
router.delete('/:id', todoController.deleteTodo);
router.patch('/:id', todoController.toggleTodoComplete);

export default router;
