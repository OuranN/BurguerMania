import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty } from 'rxjs';

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

  @Output() fieldValueChange = new EventEmitter<string>();
  @Output() fieldValueChangeNumber = new EventEmitter<number>();
  fieldValue: string  = ''; 
  fieldValueNumber?: number; 
  hasContent: boolean = false; 

  checkContent() {
    this.hasContent = this.fieldValue.trim().length > 0;
    this.fieldValueChange.emit(this.fieldValue);
    this.fieldValueChangeNumber.emit(this.fieldValueNumber);
  }
}
