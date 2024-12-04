import { Component } from '@angular/core';
import { Burguer } from '../../interfaces/burguer.interface';
import { CardComponent } from "../../card/card.component";
import { NgFor } from '@angular/common';
import { ButtonLargeComponent } from "../../button-large/button-large.component";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CardComponent, NgFor, ButtonLargeComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  burguers: Burguer[] = [];
  selectCategory:string ='';
  selectedCategory: number = 12;
  showAllBurgers: boolean = false;
  buttonText: string = "Ver cardápio completo";
  displayedBurguers: Burguer[] = [];
  toggleBoolean: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.route.params.subscribe(params => {
      this.selectCategory=params['categoryName'];

      if(this.selectCategory=='X-Vegan'){
        this.selectedCategory = 12; // Converte para número
      } else {if(this.selectCategory=='X-Fitnnes'){
        this.selectedCategory = 13; // Converte para número
      }else{if(this.selectCategory=='X-Infarto'){
        this.selectedCategory = 14; // Converte para número
      }else{this.selectedCategory = 15;}}
      }
      this.getProducts(); // Carrega produtos com base na categoria
    });
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      (burguers) => {
        console.log('Produtos recebidos:', burguers);
        this.burguers = burguers;
        this.updateDisplayedBurguers(); // Atualiza exibição inicial
      },
      error => console.error('Erro ao carregar produtos:', error)
    );
  }

  updateDisplayedBurguers() {
    const filteredBurguers = this.getFilteredBurgers();
    this.displayedBurguers = this.toggleBoolean ? filteredBurguers : filteredBurguers.slice(0, 3);
  }

  toggleMenu() {
    this.toggleBoolean = !this.toggleBoolean;
    this.updateDisplayedBurguers();
    this.buttonText = this.toggleBoolean ? "Minimizar Cardápio" : "Ver cardápio completo";
  }

  getFilteredBurgers() {
    console.log('Filtrando produtos para a categoria:', this.selectedCategory);
    return this.burguers.filter(burger => burger.categoryId === this.selectedCategory);
  }

  goToDetailsPage(burger: Burguer) {
    console.log('Burger selecionado:', burger.name);
    this.router.navigate(['/detalhes', burger.name]);
  }
}
