import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictPageComponent } from './district-page/district-page.component';
import { DistrictIntroComponent } from './district-page/district-intro/district-intro.component';
import { DistrictDocumentsComponent } from './district-page/district-documents/district-documents.component';
import { DistrictContactsComponent } from './district-page/district-contacts/district-contacts.component';


@NgModule({
  declarations: [DistrictPageComponent, DistrictIntroComponent, DistrictDocumentsComponent, DistrictContactsComponent],
  imports: [
    CommonModule,
    DistrictRoutingModule
  ]
})
export class DistrictModule { }
