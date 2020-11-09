import { Component, SimpleChanges  } from '@angular/core';
import { LogService } from './shared/log.service.service';
import { Login, SignUp } from './signup-and-login'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	showLoginForm: boolean; 

	constructor(private logger: LogService ) {}
	
	// implement OnInit's `ngOnInit` method
	ngOnInit() { 
		this.showLoginForm = true;
	}

	ngOnChanges( changes:SimpleChanges  ) {
		console.log( changes );
	}

	toggleLoginAndSignUp(){
		this.showLoginForm = !this.showLoginForm;
	}

	onSubmit( formType ) {
		console.log('On submit' + formType );
	}
}
