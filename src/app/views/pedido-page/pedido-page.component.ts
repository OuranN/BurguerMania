import { Component } from '@angular/core';
import { Button1Component } from '../../button1/button1.component';
import { InputComponent } from "../../input/input.component";
import { Burguer } from '../../interfaces/burguer.interface';
import { Order } from '../../interfaces/Order.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';


@Component({
  selector: 'app-pedido-page',
  standalone: true,
  imports: [Button1Component, InputComponent, FormsModule],
  templateUrl: './pedido-page.component.html',
  styleUrl: './pedido-page.component.css'
})
export class PedidoPageComponent {
  burguers: Burguer[] = [];
  nomeProduto: string = '';
  quantidade: number = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService, private orderService: OrderService) {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe(
      (burguers) => {
        console.log('Produtos recebidos:', burguers);
        this.burguers = burguers;
  
      }
    );
  }
  
  finalizarPedido() {
    console.log("não foi implementado");
    console.log('Nome do Produto:', this.nomeProduto);
    console.log('Nome do Produto:', this.quantidade);
    this.cadastrarPedido();
    
}

onFieldProdutoChange(value: string) {
  this.nomeProduto = value;
}

onFieldValueChangeNumber(value: number) {
  this.quantidade=value;
}

cadastrarPedido() {
  // Procura o produto no array burguers pelo nome
  const burguer = this.burguers.find((b) => b.name === this.nomeProduto);

  if (burguer) {
    const value = burguer.price * this.quantidade;

    const order: Order = {
      statusId: 1,
      value: value,
    };
    console.log(order);
    this.orderService.cadastrarPedido(order).subscribe(_ => this.getProducts());
    alert("PEDIDO CADASTRADO"+"\nStatus Id = "+ order.statusId+"\nPreço Total = R$"+order.value)

}
}
}
