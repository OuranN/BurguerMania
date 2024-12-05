import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Burguer } from '../../interfaces/burguer.interface';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../interfaces/Order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = environment.api;
  constructor(private httpClient: HttpClient) { 
  }

  cadastrarPedido(order:Order){
    return this.httpClient.post<Order>(this.url+ '/order', order);
  }
}






  

 


