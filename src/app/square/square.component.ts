import { Component, Input } from '@angular/core';

// Dumb Component - only cares about what parents pass to it
@Component({
  selector: 'app-square',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: [
    `button { 
      width: 200px;
      height: 200px;
      background-color: red;
      font-size: 3rem;
    }`
  ]
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
