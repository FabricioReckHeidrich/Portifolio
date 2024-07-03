import { Component } from '@angular/core';

type Piada = {
  piada_ingles:string,
  piada_portugues:string
}

@Component({
  selector: 'app-piadas',
  templateUrl: './piadas.component.html',
  styleUrl: './piadas.component.scss'
})
export class PiadasComponent {

  piada:Piada = {
    piada_ingles:'click button to recive a joke',
    piada_portugues:'Clique para receber uma piada'
  }

}