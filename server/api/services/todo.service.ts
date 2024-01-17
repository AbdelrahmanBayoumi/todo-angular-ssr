import { Todo } from '../models/todo.model';

// In-memory array to store todos
const todos: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false,
  },
];

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
