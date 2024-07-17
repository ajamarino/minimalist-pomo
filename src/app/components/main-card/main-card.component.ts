import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterOutlet],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {

}
