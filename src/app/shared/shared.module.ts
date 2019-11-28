import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { DocumentCardComponent } from './document-card';
import { DocumentService } from './document.service';
import { MapLinkService } from './map-link.service';
import {
  ContactCardComponent,
  ContactNamePipe,
  AddressComponent
} from './contact-card';
import { ContactGroupCardComponent } from './contact-group-card';
import { SimpleAddressComponent } from './contact-card/simple-address/simple-address.component';

@NgModule({
  declarations: [
    DocumentCardComponent,
    ContactCardComponent,
    ContactNamePipe,
    AddressComponent,
    ContactGroupCardComponent,
    SimpleAddressComponent
  ],
  imports: [CommonModule, MatCardModule, MatChipsModule],
  providers: [DocumentService, MapLinkService],
  exports: [
    DocumentCardComponent,
    ContactCardComponent,
    ContactGroupCardComponent
  ]
})
export class SharedModule {}
