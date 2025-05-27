import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  @Input() title: string = '';
  @Input() primaryButtonText: string = '';
  @Input() secondaryButtonText: string = '';
}
