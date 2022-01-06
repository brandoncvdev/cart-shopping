import { ItemAdminModule } from './../../shared/components/item-admin/item-admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderAdminModule } from '../../shared/components/header-admin/header-admin.module';

import { ItemsAdminPageRoutingModule } from './items-admin-routing.module';
import { ItemsAdminPage } from './items-admin.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ItemsAdminPageRoutingModule,
    HeaderAdminModule,
    ItemAdminModule,
  ],
  declarations: [ItemsAdminPage],
})
export class ItemsAdminPageModule {}
