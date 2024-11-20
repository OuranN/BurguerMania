import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button2Component } from '../../button2/button2.component';
import { Button1Component } from '../../button1/button1.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule,Button2Component, Button1Component],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
