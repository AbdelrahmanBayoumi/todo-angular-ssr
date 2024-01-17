import { Request, Response } from 'express';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

const todoService = new TodoService();

// Get all todos
export const getTodos = (req: Request, res: Response): void => {
  const todos = todoService.getTodos();
  res.json(todos);
};

// Add a new todo
export const addTodo = (req: Request, res: Response): void => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ error: 'Title is required' });
    return;
  }
  const newTodo = new Todo(Date.now(), title, false);
  todoService.addTodo(newTodo);
  res.status(201).json(newTodo);
};

// Delete a todo by ID
export const deleteTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  todoService.deleteTodo(Number(id));
  res.status(204).send();
};

// Toggle the completion status of a todo by ID
export const toggleTodoComplete = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { completed } = req.body;
  if (completed === undefined) {
    res.status(400).json({ error: 'Completed status is required' });
    return;
  }
  const updatedTodo = todoService.toggleTodoComplete(Number(id), completed);
  if (!updatedTodo) {
    res.status(404).json({ error: 'Todo not found' });
    return;
  }
  res.json(updatedTodo);
};
