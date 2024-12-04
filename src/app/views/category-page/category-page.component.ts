import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../../button-large/button-large.component';
import { CardComponent } from '../../card/card.component';
import { Category } from '../../interfaces/Category.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category/category.service';


@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [ButtonLargeComponent, CardComponent, CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

  categorias : Category[]=[];

 
  selectedCategory: string | null = null;
  buttonText: string = "Ver cardápio completo"
  displayedCategories: Category[] = [];
  showAll: boolean = false;

  constructor(private router: Router, private categoryService:CategoryService) {
    this.getCategories();
    this.displayedCategories = this.categorias.slice(0, 3);
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(
      (categorias) => {
        this.categorias = categorias;
        this.displayedCategories = this.categorias.slice(0, 3);  // Inicializa com as 3 primeiras categorias
        console.log(this.categorias);
      }
    );
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
