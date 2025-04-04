import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent {
  todoService = inject(TodosService);
  text: string = '';
  changeText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }
  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text=''
  }
}
