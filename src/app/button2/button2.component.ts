import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button2.component.html',
  styleUrl: './button2.component.css'
})
export class Button2Component {
  @Input() routerLink!: string;
}
