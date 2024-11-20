import { Component } from '@angular/core';
import { Button1Component } from '../../button1/button1.component';
import { InputComponent } from "../../input/input.component";


@Component({
  selector: 'app-pedido-page',
  standalone: true,
  imports: [Button1Component, InputComponent],
  templateUrl: './pedido-page.component.html',
  styleUrl: './pedido-page.component.css'
})
export class PedidoPageComponent {

}
