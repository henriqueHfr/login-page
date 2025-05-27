import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() disablePrimaryButton: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
  navigate() {
    this.onNavigate.emit();
  }
}
