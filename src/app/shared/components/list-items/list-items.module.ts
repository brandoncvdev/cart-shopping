import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListItemsComponent } from './list-items.component';
import { ItemModule } from '@shared/components/item/item.module';

@NgModule({
  declarations: [ListItemsComponent],
  imports: [CommonModule, IonicModule, ItemModule],
  exports: [ListItemsComponent],
})
export class ListItemsModule {}
