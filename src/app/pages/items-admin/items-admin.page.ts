import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, Product } from '@shared/services/cart/cart.service';

@Component({
  selector: 'app-items-admin',
  templateUrl: './items-admin.page.html',
  styleUrls: ['./items-admin.page.scss'],
})
export class ItemsAdminPage implements OnInit {
  public title: string;
  public items: Product[];

  constructor(private cart: CartService, private router: Router) {
    this.title = 'Productos';
    this.items = [];
  }

  ngOnInit() {
    this.items = this.cart.getCart();
    console.log(this.items);
  }

  public redirectToCreateItem(): void {
    this.router.navigateByUrl('/admin/agregar-item');
  }
}
