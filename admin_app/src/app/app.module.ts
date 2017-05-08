import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// Component
import { AppComponent } from './app.component';
import {routing }from './app.routing'

import { PagesModule } from './pages/page.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		PagesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }