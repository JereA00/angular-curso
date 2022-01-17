import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeborrado: string = '';

  BorrarHeroe(){
    this.heroeborrado = this.heroes.shift() || '';
  }
}
