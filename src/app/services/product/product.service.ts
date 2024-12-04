import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Burguer } from '../../interfaces/burguer.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) { 

  }

  getAllProducts(){
    return this.httpClient.get<Burguer[]>(this.url+ '/products')
  }

  
}