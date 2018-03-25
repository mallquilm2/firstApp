import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector:'home',
    templateUrl:'../home/home.component.html',
    providers: [RopaService]
})
export class HomeComponent{
    public titulo = "Pagina principal";
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;

    constructor(
        private _ropaService : RopaService//inyecta al servicio para usarlo sin necesitada de hacer new
    ){}

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardarRopa(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminar(indice){
        console.log(indice);
        this._ropaService.deleteRopa(indice);
    }
}