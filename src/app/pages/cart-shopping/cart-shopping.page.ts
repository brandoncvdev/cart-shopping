import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '@shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.page.html',
  styleUrls: ['./cart-shopping.page.scss'],
})
export class CartShoppingPage implements OnInit {
  public title: string;
  public total = 100;
  public items: Product[];

  constructor(private cart: CartService) {
    this.title = 'Mi carrito';
    this.items = [];
  }

  ngOnInit() {
    this.items = this.cart.getCart();
    console.log(this.items);
    this.totalPriceProducts();
    this.intializePrice();
  }

  private totalPriceProducts(): void {
    this.items.forEach((product) => {
      this.total += product.price;
    });
  }

  private intializePrice(): void {
    this.cart.getCartTotalPrice().subscribe((res) => {
      this.total = res;
    });
  }
}
