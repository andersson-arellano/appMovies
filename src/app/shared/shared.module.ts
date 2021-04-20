import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengmModule } from './../primengm/primengm.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengmModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
