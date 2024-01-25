import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [TodoItemComponent, NgFor],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.scss',
})
export class ListTodoComponent {
  todos: Todo[] = [];

  constructor(private TodoService: TodoService) {
    this.todos = this.TodoService.getListTodo();
  }

  todoListChanged() {
    this.todos = this.TodoService.getListTodo();
  }
}
