import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSubmitComponent } from './button-submit.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ButtonSubmitComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonSubmitComponent],
})
export class ButtonSubmitModule {}
