import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '@shared/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  public counter: number;

  constructor(
    private location: Location,
    private router: Router,
    private cartService: CartService
  ) {
    this.counter = 0;
  }

  ngOnInit() {
    this.cartService.getCartItemCount().subscribe((res) => {
      console.log(res);

      this.counter = res;
    });
  }

  public backLocation(): void {
    this.location.back();
  }

  public myCartShopping(): void {
    this.router.navigate(['/mi-carrito']);
  }
}
