import { Component } from '@angular/core';

@Component({
    selector:'empleado',
    templateUrl:'../empleado/empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = "Pagina Empleado";
    
    public empresas = [
        {nombre:"ETTIZA", codigo:"001"},
        {nombre:"ITZZA",  codigo:"002"},
        {nombre:"ORMEÑO", codigo:"003"},
        {nombre:"ZOYUS",  codigo:"004"},
        {nombre:"TEPSA",  codigo:"005"},
    ]


    selectItem(objectoSeleccionado){
        console.log(objectoSeleccionado);
    }
}