import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() textLabel!:string;
  @Input() inputName!:string;
  @Input() isTextarea: boolean = false;
  @Input() required: boolean = false;


  fieldValue: string = ''; 
  hasContent: boolean = false; 

  checkContent() {
    this.hasContent = this.fieldValue.trim().length > 0;
  }
}
