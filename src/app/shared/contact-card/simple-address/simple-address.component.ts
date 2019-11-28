import { Component, Input } from '@angular/core';
import { Contact } from '../contact-card.component';

@Component({
  selector: 'bc-simple-address',
  templateUrl: './simple-address.component.html',
  styleUrls: ['./simple-address.component.scss']
})
export class SimpleAddressComponent {
  @Input() public contact: Contact;
}
