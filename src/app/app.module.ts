import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HouseFilterPipe } from './house/house-filter.pipe';

import { HeaderComponent } from './house/header/header.component';








@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    HouseFilterPipe,
    HeaderComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
