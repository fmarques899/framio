import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ColorsService } from './colors.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  providers: [
    ColorsService
  ]
})
export class ButtonModule { }
