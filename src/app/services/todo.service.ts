import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getListTodo(): Todo[]{
    let todoStr = localStorage.getItem('todos');
    if(!todoStr){
      return [];
    }

    let todos = JSON.parse(todoStr);
    
    return todos;
  }

  getTodo(id: number) {
    let todos = this.getListTodo();
    let todo = todos.find(t => t.id == id);
    return todo;
  }

  createTodo(todo: Todo){
    let todos = this.getListTodo();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(id: number) {
    let todos = this.getListTodo();
    let index = todos.findIndex(t => t.id === id);
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  saveTodo(id: number){
    let todos = this.getListTodo();
    let index = todos.findIndex(t => t.id === id);
    todos[index].isFavourite = !todos[index].isFavourite;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
