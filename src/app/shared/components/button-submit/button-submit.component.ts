import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss'],
})
export class ButtonSubmitComponent {
  @Input() text: string;
  constructor() {}
}
