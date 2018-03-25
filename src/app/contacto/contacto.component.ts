import { Component } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { RopaService } from '../services/ropa.service';

@Component({
    selector:'contacto',
    templateUrl:'../contacto/contacto.component.html',
    providers: [RopaService]
})
export class ContactoComponent{
    public titulo = "Pagina contacto";
    public parametro;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router
      ){}

      ngOnInit(){
          this._route.params.forEach((params: Params)=>{
            this.parametro = params['page'];
            console.log(params);
          });
      }

      redirigir(){
          this._router.navigate(['/contacto','Miguel']);
      }

      redirigir2(){
        this._router.navigate(['/pagina-principal']);
    }
}