import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '@shared/services/cart/cart.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
  public items: Product[];

  constructor(private cart: CartService) {
    this.items = [];
  }

  ngOnInit() {
    this.items = this.cart.getCart();
    console.log(this.items);
  }
}
