import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
  ],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskComponent {
  @Input() task!: { id: number; content: string; completed: boolean };
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  toggleTask() {
    this.toggle.emit(this.task.id);
  }

  deleteTask() {
    this.delete.emit(this.task.id);
  }
}
