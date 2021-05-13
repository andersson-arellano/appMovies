import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ScrollTopModule} from 'primeng/scrolltop';
import { ScrollPanelModule } from "primeng/scrollpanel";
import {TabMenuModule} from 'primeng/tabmenu';
import {SplitterModule} from 'primeng/splitter';



@NgModule({
  exports:[
    CardModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ScrollTopModule,
    ScrollPanelModule,
    TabMenuModule,
    SplitterModule
  ]
})
export class PrimengmModule { }
