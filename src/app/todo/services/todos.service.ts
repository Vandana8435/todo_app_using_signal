import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoSignal = signal<TodoInterface[]>([]);
  filterSignal = signal<FilterEnum>(FilterEnum.all);
  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(),
    };
    this.todoSignal.update((todos) => [...todos, newTodo]);
  }
  changeFilter(filterName: FilterEnum): void {
    this.filterSignal.set(filterName);
  }
  changeTodo(id: string, text: string): void {
    this.todoSignal.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }
  removeTodo(id: string): void {
    this.todoSignal.update((todos) => todos.filter((todo) => todo.id != id));
  }
  toggleTodo(id: string): void {
    this.todoSignal.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }
}
