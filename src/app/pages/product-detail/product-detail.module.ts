import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonSubmitModule } from '@shared/components/button-submit/button-submit.module';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';
import { ProductDetailPage } from './product-detail.page';
import { HeaderModule } from '@shared/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    ButtonSubmitModule,
    HeaderModule,
  ],
  declarations: [ProductDetailPage],
})
export class ProductDetailPageModule {}
