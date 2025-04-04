import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todos/todos.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [CommonModule,TodoComponent],
})
export class MainComponent {
  todoService = inject(TodosService);
  editingId:string|null =null;
  visibleTodos = computed(() => {
    const todos = this.todoService.todoSignal();
    const filter = this.todoService.filterSignal();
    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    } else {
      return todos;
    }
  });

  setEditingId(editingId:string|null):void{
    this.editingId=editingId
  }
}
