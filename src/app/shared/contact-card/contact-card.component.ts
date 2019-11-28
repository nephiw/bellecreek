import { Component, Input } from '@angular/core';

export interface Contact {
  firstName: string;
  lastName: string;
  position?: string;
  company?: string;
  phone?: string;
  emails?: string[];
  address?: string[];
  urls?: string[];
}

@Component({
  selector: 'bc-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  @Input() public contact: Contact;
}
