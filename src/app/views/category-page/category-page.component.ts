import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../../button-large/button-large.component';
import { CardComponent } from '../../card/card.component';
import { Category } from '../../interfaces/Category.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [ButtonLargeComponent, CardComponent, CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  
  categorias: Category[] = [  
    {        
      name: 'X-Vegan',     
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      imageUrl:'/images/hamburguer.png',
    },
    {         
      name: 'X-Fitnnes',     
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      imageUrl:'/images/hamburguer.png',
    },
    {        
      name: 'X-Infarto',     
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      imageUrl:'/images/hamburguer.png',
    },
    {       
      name: 'Extra-Burguer',     
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      imageUrl:'/images/hamburguer.png',
    },
    {       
      name: 'Extra-Burguer',     
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      imageUrl:'/images/hamburguer.png',
    },
    {       
      name: 'Extra-Burguer',     
      description:'Pão, Habúrguer, alface, tomate, queijo e maionese' ,
      imageUrl:'/images/hamburguer.png',
    }
  ]

  selectedCategory: string | null = null;
  buttonText: string = "Ver cardápio completo"

  displayedCategories: Category[] = [];
  showAll: boolean = false;

  constructor(private router: Router) {
    this.displayedCategories = this.categorias.slice(0, 3);
  }

  showFullMenu() {
    if(this.showAll==true){
      this.buttonText = "Ver cardápio completo";
      this.showAll = false;
      this.displayedCategories = this.categorias.slice(0, 3);
    } else{
      this.buttonText = "Minimizar Cardápio";
      this.showAll = true;
      this.displayedCategories = this.categorias;
    }
  }   

  selectCategory(category:string){
    this.selectedCategory=category;
  }

  goToProductPage(categoryName: string) {
    this.router.navigate([`/produto/${categoryName}`]); 
  }

}
