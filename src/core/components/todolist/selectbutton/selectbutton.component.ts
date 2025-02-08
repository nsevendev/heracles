import { Component, EventEmitter, Output } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'selectbutton',
  standalone: true,
  imports: [SelectButtonModule, FormsModule],
  templateUrl: './selectbutton.component.html',
  styleUrl: './selectbutton.component.css',
})
export class SelectbuttonComponent {
  filter = [
    { name: 'All', code: 'all' },
    { name: 'Completed', code: 'completed' },
    { name: 'Incomplete', code: 'incomplete' },
  ];

  taskFilter = this.filter[0];

  @Output() filterChange = new EventEmitter<string>();

  onFilterChange() {
    this.filterChange.emit(this.taskFilter.code);
  }
}
