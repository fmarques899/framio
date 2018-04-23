import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarTopicComponent } from './navbar-topic/navbar-topic.component';
import { ColorsService } from './colors.service';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule
  ],
  exports: [
    NavbarComponent,
    NavbarTopicComponent,
    NavbarSearchComponent
  ],
  declarations: [NavbarComponent, NavbarTopicComponent, NavbarSearchComponent],
  providers: [
    ColorsService
  ]
})
export class NavbarModule { }
