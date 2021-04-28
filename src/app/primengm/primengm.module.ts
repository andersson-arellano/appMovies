import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';




@NgModule({
  exports:[
    CardModule,
    MenubarModule,
    MessageModule,
    MessagesModule
  ]
})
export class PrimengmModule { }
