import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './page.routing';

import { Pages } from './page.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [Pages]
})
export class PagesModule {

}
