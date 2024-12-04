import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Category } from '../../interfaces/Category.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) { 

  }

  getAllCategories(){
    return this.httpClient.get<Category[]>(this.url+ '/categories')
  }
}

