import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // In-memory array to store todos
  private todos: Todo[] = [];

  constructor() {
    // Initialize with some sample data (you can remove this in production)
    this.todos = [
      new Todo(this.generateUniqueId(), 'Sample Todo 1', false),
      new Todo(this.generateUniqueId() + 2, 'Sample Todo 2', true),
    ];
  }

  getTodos(): Observable<Todo[]> {
    // Return a copy of the in-memory todos array as an observable
    return of(this.todos);
  }

  addTodo(title: string): Observable<Todo[]> {
    // Generate a unique ID for the new todo (you can use a library for this)
    const newId = this.generateUniqueId();
    const newTodo = new Todo(newId, title, false);

    // Add the new todo to the in-memory array
    this.todos.push(newTodo);

    // Return the newly added todo as an observable
    return of(this.todos);
  }

  deleteTodo(id: number): Observable<Todo[]> {
    // Find the index of the todo with the specified ID
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      // Remove the todo from the in-memory array
      this.todos.splice(index, 1);
    }

    // Return an observable with no data (void)
    return of(this.todos);
  }

  private generateUniqueId(): number {
    return Date.now();
  }
}
