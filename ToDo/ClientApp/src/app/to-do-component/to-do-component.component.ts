import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.css']
})
export class ToDoComponentComponent implements OnInit {

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
  }

}
