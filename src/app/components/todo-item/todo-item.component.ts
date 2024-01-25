import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;

  @Output()
  todoListChanged = new EventEmitter<any>();

  constructor(
    private todoService: TodoService,
    private toastStr: ToastrService
  ) {}

  removeTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todoListChanged.emit();
    this.toastStr.error('Delete todo success');
  }

  checkTodo(id: number) {
    let todos = this.todoService.getListTodo();
    let index = todos.findIndex((t) => t.id === id);
    todos[index].isCompleted = !todos[index].isCompleted;
    localStorage.setItem('todos', JSON.stringify(todos));
    this.toastStr.success(
      `${todos[index].isCompleted ? 'Check' : 'Uncheck'} todo success`
    );
    this.todoListChanged.emit();
  }
}
