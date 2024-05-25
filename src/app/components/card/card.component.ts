import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-image">
        <img src="assets/img/{{image}}" alt="angular">
      </div>
      <div class="card-content">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
      </div>
      <div class="card-action">
        <a href="{{link}}" target="_blank">Learn More</a>
      </div>
    </div>
  `,
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() link: string = '';
}
