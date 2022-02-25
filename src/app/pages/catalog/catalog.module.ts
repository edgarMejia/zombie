import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CatalogComponent}]),
  ]
})
export class CatalogModule { }
