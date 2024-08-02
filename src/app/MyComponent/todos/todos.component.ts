import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../Todo';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, NgFor, AddTodoComponent, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  localItem: string | null;
  todos:Todo[];
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }

   }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){ 
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
    console.log(todo)
  }
}
