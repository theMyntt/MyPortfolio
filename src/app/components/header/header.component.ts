import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header">
      <div class="brand-logo">
        <h2>araújo.dev</h2>
      </div>
      <div class="hyper-links">
        <a href="https://github.com/theMyntt?tab=repositories">projects</a>
        <a href="experience">experience</a>
        <a href="contact">contact</a>
      </div>
    </div>
  `,
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
