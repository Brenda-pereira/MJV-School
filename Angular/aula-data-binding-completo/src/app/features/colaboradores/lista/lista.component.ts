import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

    titulo = "Lista de Colaboradores"; 
    
    colaborador = {
       id:7,
       nome: "Nathan Carlos Exercicio", 
       salario: 4500, 
       cargo: "Dev Pl",
       imagem: "src\assets\colaborador.jfif"
      };
};
  
  constructor() {}

  ngOnInit() {
  }
}