import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { ConversorPipe } from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    EmpleadoComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
