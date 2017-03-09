import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: "./loginView.html",
})
export class AppComponent  { 
  name = 'Angular'; 

  constructor(private router: Router) {}

  login() {
    
  }
}
