import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { CatalogModule } from './catalog/catalog.module';
import { NotFoundModule } from './not-found/not-found.module';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    AboutModule,
    CatalogModule,
    NotFoundModule
  ]
})
export class PagesModule { }
