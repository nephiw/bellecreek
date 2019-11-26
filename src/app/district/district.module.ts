import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictPageComponent } from './district-page/district-page.component';


@NgModule({
  declarations: [DistrictPageComponent],
  imports: [
    CommonModule,
    DistrictRoutingModule
  ]
})
export class DistrictModule { }
