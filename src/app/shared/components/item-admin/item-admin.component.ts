import { Component, Input } from '@angular/core';
import { AlertService } from '@app/shared/services/alert/alert.service';
import { CartService, Product } from '@shared/services/cart/cart.service';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.scss'],
})
export class ItemAdminComponent {
  @Input() title: string;
  @Input() price: number;
  @Input() type: string;
  @Input() product: Product;

  constructor(private alert: AlertService) {}

  public removeProduct(product: any): void {
    console.log('Borrar', product);
    this.alert.presentAlertDeleteItem(product);
  }
}
