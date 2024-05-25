import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {
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
