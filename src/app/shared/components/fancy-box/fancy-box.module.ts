import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyBoxComponent } from './fancy-box.component';

@NgModule({
  declarations: [FancyBoxComponent],
  imports: [CommonModule],
  exports: [FancyBoxComponent],
})
export class FancyBoxModule {}
