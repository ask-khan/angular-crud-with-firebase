import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Login, SignUp } from './../signup-and-login';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
	currentForm = new SignUp("", "", "");
	@Output()
	toggleLoginAndSignUp = new EventEmitter<string>();
	constructor() { }

	ngOnInit(): void {

	}

	openLogin() {
		this.toggleLoginAndSignUp.emit();
	}
	
	onSubmit(formType) {
		console.log('On submit' + formType);
	}

}
