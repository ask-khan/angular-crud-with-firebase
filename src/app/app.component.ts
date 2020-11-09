import { Component } from '@angular/core';
import { LogService } from './shared/log.service.service';

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

	toggleLoginAndSignUp(){
		this.showLoginForm = !this.showLoginForm;
	}

	onSubmit( formType ) {
		console.log('On submit' + formType );
	}
}
