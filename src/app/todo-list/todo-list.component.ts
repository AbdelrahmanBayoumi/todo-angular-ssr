import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, NgForOf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  onAddTodo(): void {
    this.todoService
      .addTodo('New Todo ' + Math.floor(Math.random() * 1000))
      .subscribe((todo) => this.todos.push(todo));
  }

  onDelete(todo: Todo): void {
    this.todoService
      .deleteTodo(todo.id)
      .subscribe(() => (this.todos = this.todos.filter((t) => t.id !== todo.id)));
  }
}
