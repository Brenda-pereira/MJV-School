import { Component, OnInit } from '@angular/core';

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
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg"
  };

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
    alert("voc¨we passou o mouse em cima de uma tag");
  }

  pressionouTecla(event: any) {
    console.log(event.target.value)
  }

  exibeProdutoSimNao() {
    this.exibeProduto = !this.exibeProduto
  }

}
