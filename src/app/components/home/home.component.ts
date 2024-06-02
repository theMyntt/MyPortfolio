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

  private name: string = ""

  setName(e: any) {
    this.name = e.target.value;
  }
  
  goBack() {
    history.back()
  }

  sendMessage() {
    if (!this.name) {
      alert("Please enter your name");
      return;
    }
    window.open("https://wa.me/5511992046942?text=Hi,%20I'm%20" + encodeURIComponent(this.name), "_blank");
  }
}
