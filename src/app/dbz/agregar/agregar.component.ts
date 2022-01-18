import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('nuevoHijo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output('nuevoPersonajeHijo') OnNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService){}

  agregar( ){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    
    console.log(this.nuevo);
    //this.OnNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
