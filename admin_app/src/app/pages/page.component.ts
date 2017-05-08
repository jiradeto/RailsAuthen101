import { Component } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'pages',
  template: `
  Page component
  <hr/>
  <router-outlet></router-outlet>
  `
})
export class Pages {
}
