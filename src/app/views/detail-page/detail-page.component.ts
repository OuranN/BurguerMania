import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Burguer } from '../../interfaces/burguer.interface';
import { Button1Component } from "../../button1/button1.component";
import { DetailsComponent } from "../../details/details.component";
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from "../../card-details/card-details.component";
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  imports: [CommonModule, Button1Component, DetailsComponent, CardDetailsComponent, RouterModule]
})
export class DetailPageComponent implements OnInit {

  burguers: Burguer[] = [];

  selectedBurger!: Burguer;
  router: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const burgerName = this.route.snapshot.paramMap.get('name');
    
    this.productService.getAllProducts().subscribe(
      (burguers) => {
        console.log('Produtos recebidos:', burguers);
        this.burguers = burguers;

        if (burgerName) {
          this.selectedBurger = this.burguers.find(burger => burger.name === burgerName)!;
          console.log(this.selectedBurger);
        } else {
          console.error('Burger não encontrado');
        }
      },
      (error) => console.error('Erro ao carregar produtos:', error)
    );
  }
}

