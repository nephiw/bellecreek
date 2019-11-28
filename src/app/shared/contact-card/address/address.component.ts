import { Component, Input } from '@angular/core';
import { MapLinkService } from '@app/shared/map-link.service';
import { Contact } from '../contact-card.component';

@Component({
  selector: 'bc-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  @Input() public contact: Contact;

  constructor(private readonly mapLink: MapLinkService) {}

  public getMapLink(contact: Contact) {
    return this.mapLink.getMapUri(contact.address.join(', '));
  }
}
