import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes = [
    {path:'',component:HomeComponent},//ruta vacía lleva a homeComponent
    {path:'**',component:HomeComponent}, //ruta que falla lleva a homeComponent
    {path:'pagina-principal',component:HomeComponent},
    {path:'contacto',component:ContactoComponent},
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes);