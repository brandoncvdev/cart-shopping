import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonsCartComponent } from './buttons-cart.component';

@NgModule({
  declarations: [ButtonsCartComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonsCartComponent],
})
export class ButtonsCartModule {}
