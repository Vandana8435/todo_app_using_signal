import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent {
  todosService = inject(TodosService);
  filter = this.todosService.filterSignal;
  filterEnum = FilterEnum;
  activeCount = computed(() => {
    return this.todosService.todoSignal().filter((todo) => !todo.isCompleted)
      .length;
  });
  noTodosClass = computed(() => this.todosService.todoSignal().length === 0);
  itemsLeftText = computed(
    () => `item${this.activeCount() != 1 ? 's' : ''} left`
  );
  changeFilter(event: Event, filter: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filter);
    console.log('Signal');
  }
}
