import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
