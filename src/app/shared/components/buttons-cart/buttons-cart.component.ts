import { Component, Input } from '@angular/core';
import { Product, CartService } from '@shared/services/cart/cart.service';

@Component({
  selector: 'app-buttons-cart',
  templateUrl: './buttons-cart.component.html',
  styleUrls: ['./buttons-cart.component.scss'],
})
export class ButtonsCartComponent {
  @Input() p: any;
  @Input() product: Product;
  constructor(private cart: CartService) {}

  public lessItem(item: Product): void {
    this.cart.decreaseProduct(item);
  }

  public addItem(item: Product): void {
    this.cart.addProduct(item);
  }
}
