import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PricesPageComponent } from './prices-page/prices-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    PricesPageComponent
  ],
  exports:[
    HomeComponent,
    PricesPageComponent
  ]
})
export class PagesModule { }
