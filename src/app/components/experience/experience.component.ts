import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.sass'
})
export class ExperienceComponent {
  goBack() {
    history.back()
  }
}
