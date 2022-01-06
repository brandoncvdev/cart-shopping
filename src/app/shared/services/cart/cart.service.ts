import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  data: Product[] = [
    { name: 'Mcbook M1', price: 140, qty: 1, id: 1 },
    { name: 'Mcbook M1', price: 140, qty: 1, id: 2 },
    { name: 'Mcbook M1', price: 140, qty: 1, id: 3 },
    { name: 'Mcbook M1', price: 140, qty: 1, id: 4 },
  ];
  private cart = [
    { name: 'Mcbook M1', price: 140, qty: 1, id: 1 },
    { name: 'Mcbook M1', price: 140, qty: 1, id: 2 },
    { name: 'Mcbook M1', price: 140, qty: 1, id: 3 },
    { name: 'Mcbook M1', price: 140, qty: 1, id: 4 },
  ];
  private cartItemCount = new BehaviorSubject(this.cart.length);
  private cartPriceTotal = new BehaviorSubject(0);

  constructor() {
    this.checkTotalPrice();
  }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  getCartTotalPrice(): BehaviorSubject<number> {
    return this.cartPriceTotal;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.qty = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.checkTotalPrice();
  }

  decreaseProduct(product) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === product.id) {
        item.qty -= 1;
        if (item.qty === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
    this.checkTotalPrice();
  }

  removeProduct(product) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - item.qty);
        this.cart.splice(index, 1);
      }
    }
    this.checkTotalPrice();
  }

  checkTotalPrice(): void {
    let price = 0;
    this.cart.forEach((item) => {
      for (let i = 0; i < item.qty; i++) {
        price += item.price;
      }
    });
    this.cartPriceTotal.next(price);
  }
}
