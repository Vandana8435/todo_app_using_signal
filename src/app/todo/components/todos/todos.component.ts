import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TodoComponent implements OnInit, OnChanges {
  todoService = inject(TodosService);
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  @ViewChild('textInput') textInput?: ElementRef;

  editingText: string = '';

  ngOnInit() {
    this.editingText = this.todo.text;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }
  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    this.todoService.changeTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
  }
  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo.id);
  }
  removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }
  toggleTodo(): void {
    this.todoService.toggleTodo(this.todo.id);
  }
}
