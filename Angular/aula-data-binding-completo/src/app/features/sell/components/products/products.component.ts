import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  exibeProduto = true

  titulo = "Produtos";

  produto = {
    descricao: "Playstation 5",
    preco: 4600,
    quantidade: 1,
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
    disponivel: true,
  };
  produtos: Array<product> = [
    {
      descricao: "Fone",
      preco: 460,
      quantidade: 1,
      imagem:"./assets/heatset_1.webp",
      disponivel: true,
    },
    {
      descricao: "Notebook",
      preco: 4500,
      quantidade: 1,
      imagem: "./assets/notebok_1.webp ",
      disponivel: true,
    },
    {
      descricao: "celular",
      preco: 1500,
      quantidade: 0,
      imagem: " ./assets/celular.webp ", 
      disponivel: false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  
  }

  precoComDesconto(preco: number) {
    return preco * 0.90;

  }
  obterPrecoDesconto() {
    this.produto.preco = this.produto.preco * 0, 90;
  }
  compra() {
    alert("Produto comprado com sucesso")
  }
  clicouTag() {
    alert("vocë passou o mouse em cima de uma tag");
  }
  passouMause() {
    alert("voce passou o mouse em cima de uma tag");
  }

  pressionouTecla(event: any) {
    console.log(event.target.value)
  }

  exibeProdutoSimNao() {
    this.exibeProduto = !this.exibeProduto
  }

}
