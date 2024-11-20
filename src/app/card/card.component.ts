import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Burguer } from '../interfaces/burguer.interface';
import { Category } from '../interfaces/Category.interface';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() card!:Category; 
  @Input() isSelected: boolean = false; // Define se o card está selecionado
  @Output() select = new EventEmitter<void>(); // Notifica o parent quando clicado

  onSelect() {
    this.select.emit();
  }
}





