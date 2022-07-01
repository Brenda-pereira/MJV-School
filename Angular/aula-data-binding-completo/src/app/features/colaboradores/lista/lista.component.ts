import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

    titulo = "lista de colaboradores"; 
    
    colaboradores = {

    colaborador: "Nathan",
    idade: 18,
    profissão:"dev pl" 

};
  
  constructor() {}

  ngOnInit() {
  }

}
