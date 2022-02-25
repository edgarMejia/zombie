import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutCardComponent } from '../../components/about-card/about-card.component';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: AboutComponent}]),
  ]
})
export class AboutModule { }
