import { Todo } from '../models/todo.model';

// In-memory array to store todos
const todos: Todo[] = [];

export class TodoService {
  // Get all todos
  getTodos(): Todo[] {
    return todos;
  }

  // Add a new todo
  addTodo(newTodo: Todo): void {
    todos.push(newTodo);
  }

  // Delete a todo by ID
  deleteTodo(id: number): void {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  }

  // Toggle the completion status of a todo by ID
  toggleTodoComplete(id: number, completed: boolean): Todo | undefined {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = completed;
    }
    return todo;
  }
}
