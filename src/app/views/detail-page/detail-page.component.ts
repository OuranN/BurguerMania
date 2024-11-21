import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Burguer } from '../../interfaces/burguer.interface';
import { Button1Component } from "../../button1/button1.component";
import { DetailsComponent } from "../../details/details.component";
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from "../../card-details/card-details.component";

@Component({
  selector: 'app-detail-page',
  standalone: true,
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  imports: [CommonModule, Button1Component, DetailsComponent, CardDetailsComponent, RouterModule]
})
export class DetailPageComponent implements OnInit {

  burguers: Burguer[] = [
    { 
      name: 'X-Alface-Premium', 
      description: 'Pão, Habúrguer, alface, tomate, queijo e maionese', 
      price: 35.00, imageUrl: '/images/hamburguer.png', 
      category: 'X-Vegan',
      completeDescription:'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.'
    },
    { name: 'X-Tomate', 
      description: 'Pão, Habúrguer, alface, tomate, queijo e maionese', 
      price: 35.00, 
      imageUrl: '/images/hamburguer.png', 
      category: 'X-Vegan',
      completeDescription:'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.'

    },
    { name: 'X-Frutas', 
      description: 'Pão, Habúrguer, alface, tomate, queijo e maionese', 
      price: 35.00, 
      imageUrl: '/images/hamburguer.png', 
      category: 'X-Vegan',
      completeDescription:'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.'
    },
    { name: 'X-ExtraVegan', 
      description: 'Pão, Habúrguer, alface, tomate, queijo e maionese', 
      price: 0.00, 
      imageUrl: '/images/hamburguer.png', 
      category: 'X-Vegan',
      completeDescription:'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.'
    },
    { name: 'X-Dieta', 
      description: 'Pão, Habúrguer, alface, tomate, queijo e maionese', 
      price: 35.00, 
      imageUrl: '/images/hamburguer.png', 
      category: 'X-Fitnnes',
      completeDescription:'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.'
    },
    { name: 'X-Bacon', 
      description: 'Pão, Habúrguer, bacon, queijo e maionese', 
      price: 40.00, 
      imageUrl: '/images/hamburguer.png', 
      category: 'X-Infarto',
      completeDescription:'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.'
    },
    { name: 'X-Picanha', 
      description: 'Pão, Habúrguer de picanha, alface, queijo e maionese', 
      price: 45.00, 
      imageUrl: '/images/hamburguer.png', 
      category: 'X-Infarto',
      completeDescription:'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.'
    },
  ];

  selectedBurger!: Burguer;
  router: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const burgerName = this.route.snapshot.paramMap.get('name');

    if (burgerName) {

      this.selectedBurger = this.burguers.find(burger => burger.name === burgerName)!;
      console.log(this.selectedBurger); 
    } else {
      console.error('Burger não encontrado');
    }
  }
}
