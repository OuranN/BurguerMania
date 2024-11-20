import { Component } from '@angular/core';
import { Burguer } from '../../interfaces/burguer.interface';
import { CardComponent } from "../../card/card.component";
import { NgFor } from '@angular/common';
import { ButtonLargeComponent } from "../../button-large/button-large.component";
import { Router } from '@angular/router';  // Certifique-se de importar o Router
import { ActivatedRoute } from '@angular/router';  // Importação do ActivatedRoute

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CardComponent, NgFor, ButtonLargeComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  burguers: Burguer[] = [  
    {
      name: 'X-Alface-Premium',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 35.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Vegan',
    },
    {
      name: 'X-Tomate',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 35.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Vegan',
    },
    {
      name: 'X-Frutas',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 35.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Vegan',
    },{
      name: 'X-ExtraVegan',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 0.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Vegan',
    },{
      name: 'X-ExtraVegan',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 0.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Vegan',
    },{
      name: 'X-ExtraVegan',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 0.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Vegan',
    },
    {
      name: 'X-Dieta',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 35.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Fitnnes',
    },{
      name: 'X-Dieta',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 35.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Fitnnes',
    },{
      name: 'X-Dieta',
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      price: 35.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Fitnnes',
    },
    {
      name: 'X-Bacon',
      description:'Pão, Habúrguer, bacon, queijo e maionese' ,
      price: 40.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Infarto',
    },
    {
      name: 'X-Picanha',
      description:'Pão, Habúrguer de picanha, alface, queijo e maionese' ,
      price: 45.00,
      imageUrl: '/images/hamburguer.png',
      category: 'X-Infarto',
    },
  ]

  selectedCategory: string = '';
  showAllBurgers: boolean = false; // Controla se o menu está expandido ou minimizado
  buttonText: string = "Ver cardápio completo";
  displayedBurguers: Burguer[] = [];
  toggleBoolean: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {  // Injeção do Router aqui
    this.route.params.subscribe(params => {
      this.selectedCategory = params['categoryName'];
    });
    this.displayedBurguers = this.getFilteredBurgers().slice(0, 3);
  }

  toggleMenu() {
    if(this.toggleBoolean){
      this.displayedBurguers = this.getFilteredBurgers().slice(0, 3);
      this.toggleBoolean=false;
    }else{
      this.displayedBurguers = this.getFilteredBurgers();
      this.toggleBoolean=true;
    }
    this.showAllBurgers = !this.showAllBurgers;
    this.buttonText = this.showAllBurgers ? "Minimizar Cardápio" : "Ver cardápio completo";
  }
  


  getFilteredBurgers() {
    return this.burguers.filter(burger => burger.category === this.selectedCategory);
  }

  changeCategory(category: string) {
    this.selectedCategory = category;
  }

  goToDetailsPage(burger: Burguer) {
    console.log(burger.name);
    this.router.navigate(['/detalhes', burger.name]);
  }
  
}
