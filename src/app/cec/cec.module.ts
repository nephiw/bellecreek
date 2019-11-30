import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '@lib/shared.module';

import { CecRoutingModule } from './cec-routing.module';
import {
  CecPageComponent,
  CecIntroComponent,
  CecDocumentsComponent,
  CecContactsComponent
} from './cec-page';

@NgModule({
  declarations: [CecPageComponent, CecIntroComponent, CecDocumentsComponent, CecContactsComponent],
  imports: [
    CommonModule,
    CecRoutingModule,
    SharedModule,
    MatGridListModule,
    MatDividerModule
  ]
})
export class CecModule {}
