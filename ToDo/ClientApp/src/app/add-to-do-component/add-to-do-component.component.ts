import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-do-component',
  templateUrl: './add-to-do-component.component.html',
  styleUrls: ['./add-to-do-component.component.css']
})
export class AddToDoComponent implements OnInit {
  toDoForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private toDoService: ToDoService, private router: Router) { }

  ngOnInit() {
  }

  addToDo() {
    console.log('Creating todo', this.toDoForm);
    this.toDoService
      .addToDo({ name: this.toDoForm.get('name').value })
      .subscribe(response => {
        this.router.navigate(['/to-do-list']);
      }, error => console.error('Error posting', error));
  }

}
