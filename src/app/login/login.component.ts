import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login, SignUp } from './../signup-and-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output()
  toggleLoginAndSignUp = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void { }

  openSignUp() {
    this.toggleLoginAndSignUp.emit();
  }

}
