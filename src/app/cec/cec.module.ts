import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CecRoutingModule } from './cec-routing.module';
import { CecPageComponent } from './cec-page/cec-page.component';


@NgModule({
  declarations: [CecPageComponent],
  imports: [
    CommonModule,
    CecRoutingModule
  ]
})
export class CecModule { }
