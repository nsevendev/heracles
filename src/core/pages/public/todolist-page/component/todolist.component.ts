import { Component, OnInit, inject } from '@angular/core';
import {
  //TODOLIST_PROVIDERS,
  TodolistStore,
} from '../store/todolist.store';
import { CommonModule } from '@angular/common';
import { Todolist2Store } from '../store/todolist2.store';
import { Todolist3Store } from '../store/todolist3.store';
// import { STORE_TOKEN } from '../store/store.token';
// import { ComputedService } from '../service/computed.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html', // pour lier mon html
  styleUrls: ['./todolist.component.css'], // pour lier ma feuille de style
  providers: [
    Todolist3Store,
    //...TODOLIST_PROVIDERS,
    //TodolistStore,
    // { provide: STORE_TOKEN, useValue: TodolistStore }, // Fournit store comme InjectionToken
  ], // injecte mon store localement
  imports: [CommonModule], // patch une erreur angular a la con
})
export class TodolistComponent implements OnInit {
  // j'injecte mon store pour pouvoir utiliser ses méthodes and co dans mon composant
  readonly store = inject(TodolistStore);

  ngOnInit(): void {} // équivalent au hook de montage dans react, en gros je peux éxécuter des truc onInit

  // méthode pour éviter des érreur angular a la con
  addTaskFromEvent(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.trim()) {
      this.store.addTask(input.value.trim());
      input.value = '';
    }
  }

  // pareil
  updateFilterFromEvent(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.store.updateFilter(select.value as 'all' | 'completed' | 'incomplete');
  }
}
