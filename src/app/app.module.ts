import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


// 2. Add your credentials from step 1
const config = {
	apiKey: "AIzaSyDw2C7wpMCLw4lJ22SginF4yIF9EK6WW1o",
	authDomain: "angular-crud-with-fireba-9d0cd.firebaseapp.com",
	databaseURL: "https://angular-crud-with-fireba-9d0cd.firebaseio.com",
	projectId: "angular-crud-with-fireba-9d0cd",
	storageBucket: "angular-crud-with-fireba-9d0cd.appspot.com",
	messagingSenderId: "326578628906",
	appId: "1:326578628906:web:c3286f7cc13030231ed653",
	measurementId: "G-5N55TDV947"
};


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(config),
		AngularFirestoreModule, // firestore
		AngularFireAuthModule, // auth
		AngularFireStorageModule // storage
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
