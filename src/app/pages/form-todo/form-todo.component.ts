import { Todo } from './../../interfaces/todo';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-todo.component.html',
  styleUrl: './form-todo.component.scss',
})
export class FormTodoComponent {
  constructor(
    private toastr: ToastrService,
    private todoService: TodoService
  ) {}

  todoForm = new FormGroup({
    name: new FormControl(''),
  });

  createTodo() {
    if (!this.todoForm.value.name) {
      this.toastr.error('Please enter todo name');
      return;
    }

    this.todoService.createTodo({
      id: Math.random(),
      name: this.todoForm.value.name,
      isFavourite: false,
      createdAt: new Date().toLocaleDateString(),
      isCompleted: false,
    });

    this.toastr.success('Create todo success');
    this.todoForm.reset();
  }
}
