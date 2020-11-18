import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login, SignUp } from './../signup-and-login';
import { AuthService } from './../auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	currentForm = new Login("","");

	@Output()
	toggleLoginAndSignUp = new EventEmitter<string>();

	constructor( public authService: AuthService ) { }

	ngOnInit(): void { }

	openSignUp() {
		this.toggleLoginAndSignUp.emit();
	}

	onSubmit(formType) {
		console.log( this.currentForm );
		console.log('On submit' + formType);
		this.authService.login(this.currentForm.username, this.currentForm.password);
    	this.currentForm = new Login("","");
	}

}
