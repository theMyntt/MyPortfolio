import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  show: boolean = true

  constructor() {
    setTimeout(() => this.show = false, 3000)
  }

  redirect(where: string) {
    location.href = where
  }
}
