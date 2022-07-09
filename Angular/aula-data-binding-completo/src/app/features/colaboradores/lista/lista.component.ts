import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  titulo = "Colaboradores";

constructor() {}

ngOnInit(): void {

};

colaborador = {
  id: 7,
  nome: "Nathan Carlos Exercicio",
  salario: 4500,
  cargo: "Dev Pl",
  imagem: " ./assets/colaborador.webp"
}
}