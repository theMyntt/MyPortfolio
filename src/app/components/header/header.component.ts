import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header">
      <div class="brand-logo">
        <h2>araújo.dev</h2>
        <i class="material-symbols-outlined" (click)="setShow()">menu</i>
      </div>
      <div class="hyper-links">
        <a href="https://github.com/theMyntt?tab=repositories" [class.show]="getShow()">projects</a>
        <a href="experience" [class.show]="getShow()">experience</a>
        <a href="contact" [class.show]="getShow()">contact</a>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  private show: boolean = false;

  setShow() {
    this.show = !this.show;
  }

  getShow() {
    return this.show;
  }
}
