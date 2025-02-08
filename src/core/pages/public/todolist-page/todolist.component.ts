import { Component, OnInit, inject } from '@angular/core';
import { TodolistStore } from '../../../../domain/todolist/store/todolist.store';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { SelectbuttonComponent } from '../../../components/todolist/selectbutton/selectbutton.component';
import { TaskComponent } from '../../../components/todolist/task-card/task-card.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html', // pour lier mon html
  styleUrls: ['./todolist.component.css'], // pour lier ma feuille de style
  providers: [TodolistStore], // injecte mon store localement
  imports: [
    CommonModule,
    InputTextComponent,
    SelectbuttonComponent,
    TaskComponent,
  ], // commonmodule patch une erreur angular a la con
})
export class TodolistComponent implements OnInit {
  // j'injecte mon store pour pouvoir utiliser ses méthodes and co dans mon composant
  readonly store = inject(TodolistStore);
  ngOnInit(): void {} // équivalent au hook de montage dans react, en gros je peux éxécuter des truc onInit

  // méthode que je passe a l'output entered du composant input-text
  addTaskFromEvent(taskContent: string): void {
    if (taskContent.trim()) {
      this.store.addTask(taskContent.trim());
    }
  }

  updateFilterFromEvent(selectedFilter: string): void {
    this.store.updateFilter(
      selectedFilter as 'all' | 'completed' | 'incomplete'
    );
  }
}
