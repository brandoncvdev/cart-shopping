import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '@shared/components/header/header.module';

import { CartShoppingPageRoutingModule } from './cart-shopping-routing.module';
import { CartShoppingPage } from './cart-shopping.page';
import { ButtonSubmitModule } from '../../shared/components/button-submit/button-submit.module';
import { ItemModule } from '@shared/components/item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartShoppingPageRoutingModule,
    HeaderModule,
    ButtonSubmitModule,
    ItemModule,
  ],
  declarations: [CartShoppingPage],
})
export class CartShoppingPageModule {}
