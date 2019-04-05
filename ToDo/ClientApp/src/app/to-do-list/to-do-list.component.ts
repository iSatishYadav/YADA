import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public toDos: any;

  constructor(private toDoService: ToDoService) { }

  log(message?: string, ...params: any[]) {
    console.log(`[ToDoListComponent] ${message}`, params)
  }

  ngOnInit() {
    this.toDoService
      .getAllToDoes()
      .then(todos => {
        this.toDos = todos.reduce((a, c) => a.concat(c));
        this.log('All TODOs:', todos);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
