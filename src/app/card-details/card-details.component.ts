import { Component, Input } from '@angular/core';
import { Burguer } from '../interfaces/burguer.interface';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  @Input() card!:Burguer; 
  @Input() isSelected: boolean = false; 

}
