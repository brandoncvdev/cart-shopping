import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { IonicModule } from '@ionic/angular';
import { ButtonsCartModule } from '../buttons-cart/buttons-cart.module';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, IonicModule, ButtonsCartModule],
  exports: [ItemComponent],
})
export class ItemModule {}
