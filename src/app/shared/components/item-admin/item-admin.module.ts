import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemAdminComponent } from './item-admin.component';

@NgModule({
  declarations: [ItemAdminComponent],
  imports: [CommonModule, IonicModule],
  exports: [ItemAdminComponent],
})
export class ItemAdminModule {}
