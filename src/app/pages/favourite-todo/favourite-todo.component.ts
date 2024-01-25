import { Component } from '@angular/core';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
  selector: 'app-favourite-todo',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './favourite-todo.component.html',
  styleUrl: './favourite-todo.component.scss'
})
export class FavouriteTodoComponent {

}
