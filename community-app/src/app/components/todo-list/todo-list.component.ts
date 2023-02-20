import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion;

  groups: string[] = ['Group 1', 'Group 2', 'Group 3'];
  todoItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  expandedGroups: string[] = ['group2'];

  groupItems: any[] = [{
    id: 'group1',
    name: 'Group 1',
    description: 'Group 1 Description',
    items: [{ text: 'Item 1', selected: false }, { text: 'Item 2', selected: true }, { text: 'Item 3', selected: false }, { text: 'Item 4', selected: false }]
  }, {
    id: 'group2',
    name: 'Group 2',
    description: 'Group 2 Description',
    items: [{ text: 'Item 5', selected: false }, { text: 'Item 6', selected: false }]
  }, {
    id: 'group3',
    name: 'Group 3',
    description: 'Group 3 Description',
    items: [{ text: 'Item 7', selected: false }, { text: 'Item 8', selected: false }, { text: 'Item 9', selected: false }, { text: 'Item 10', selected: true }, { text: 'Item 11', selected: true }]
  }]

  constructor() { }

  ngOnInit(): void {
  }

  isExpanded(id: string): boolean {
    return this.expandedGroups.indexOf(id) !== -1;
  }

  onEdit(event: any, item: any){
    event.stopPropagation();
  } 
}
