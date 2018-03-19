import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component';


const appRoutes:Routes = [
    {path:'',component:HomeComponent},//ruta vacía lleva a homeComponent
    {path:'pagina-principal',component:HomeComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'contacto/:page',component:ContactoComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'**',component:HomeComponent}, //ruta que falla lleva a homeComponent
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes);