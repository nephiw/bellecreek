import { Component, Input } from '@angular/core';
import { Contact } from '../contact-card';

export interface ContactGroup {
  members: Contact[];
  emails?: string[];
}

@Component({
  selector: 'bc-contact-group-card',
  templateUrl: './contact-group-card.component.html',
  styleUrls: ['./contact-group-card.component.scss']
})
export class ContactGroupCardComponent {
  @Input() public group: ContactGroup;
  @Input() public groupName: string;
}
