import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: 'primary' | 'outline' | 'transparent' = 'primary';
  @Input() isDisabled = false;
  @Output() handleClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.handleClick.emit();
  }
}
