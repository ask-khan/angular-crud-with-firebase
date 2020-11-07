import { Component } from '@angular/core';
import { LogService } from './shared/log.service.service';
import { Login, SignUp } from './signup-and-login'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	showLoginForm: boolean; 
	currentForm = new Login("","");;

	constructor(private logger: LogService ) {}
	
	// implement OnInit's `ngOnInit` method
	ngOnInit() { 
		this.showLoginForm = true;
	}

	toggleLoginAndSignUp(){
		this.showLoginForm = !this.showLoginForm;
		
		if ( this.showLoginForm == false ) { // register
			this.currentForm = new SignUp("","","");
		} else { // login
			this.currentForm = new Login("","")
		}
	}

	onSubmit( formType ) {
		console.log('On submit' + formType );
	}
}
