import { Component, Input } from '@angular/core';
import { Product } from '@shared/services/cart/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() type: string;
  @Input() product: Product;
  public counter = 1;

  constructor() {}
}
