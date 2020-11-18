import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Login, SignUp } from './../signup-and-login';
import { AuthService } from './../auth.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
	currentForm = new SignUp("", "", "");
	@Output()
	toggleLoginAndSignUp = new EventEmitter<string>();
	
	constructor( public authService: AuthService ) { }

	ngOnInit(): void {

	}

	openLogin() {
		this.toggleLoginAndSignUp.emit();
	}
	
	onSubmit(formType) {
		console.log( this.currentForm );
		console.log('On submit' + formType);
		//{username: "asasdasd", password: "1111111", emailaddress: "ahmedsaboorkhannu@gmail.com"}

		this.authService.signup(this.currentForm.emailaddress, this.currentForm.password);
    	this.currentForm = new SignUp("", "", "");
	}

}
