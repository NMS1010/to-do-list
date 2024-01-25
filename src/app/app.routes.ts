import { Routes } from '@angular/router';
import { ListTodoComponent } from './pages/list-todo/list-todo.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FormTodoComponent } from './pages/form-todo/form-todo.component';
import { FavouriteTodoComponent } from './pages/favourite-todo/favourite-todo.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ListTodoComponent,
        title: 'List Todo',
      },
      {
        path: 'list-todo',
        component: ListTodoComponent,
        title: 'List Todo',
      },
      {
        path: 'new-todo',
        component: FormTodoComponent,
        title: 'New Todo',
      },
      {
        path: 'favourite-todo',
        component: FavouriteTodoComponent,
        title: 'Favourite Todo',
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
