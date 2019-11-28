import { Component, OnInit } from '@angular/core';
import { Contact } from '@app/shared/contact-card';
import { ContactGroup } from '@app/shared/contact-group-card';

@Component({
  selector: 'bc-cec-contacts',
  templateUrl: './cec-contacts.component.html',
  styleUrls: ['./cec-contacts.component.scss']
})
export class CecContactsComponent implements OnInit {
  public contacts: Contact[] = [];
  public committee: ContactGroup;

  ngOnInit() {
    this.contacts.push(
      {
        firstName: 'Laurie',
        lastName: 'Tatlock',
        position: 'District Manager',
        company: 'Mulhern MRE',
        phone: '303-649-9857',
        address: ['188 Inverness Drive West, Suite 150', 'Englewood, CO 80112'],
        emails: ['laurie@mulhernmre.com']
      },
      {
        firstName: 'Charles',
        lastName: 'Wolfersberger',
        position: 'Covenant Enforcement Manager',
        company: 'Wolfersberger, LLC',
        phone: '720-541-7725',
        address: ['PO Box 8', 'Henderson, CO 80640'],
        emails: ['charles@wolfersbergerllc.com'],
        urls: ['http://www.wolfersbergerllc.com/']
      }
    );
    this.committee = {
      members: [
        { firstName: 'Nephi', lastName: 'Wright' },
        { firstName: 'Darren', lastName: 'Suppes' },
        { firstName: 'Eric', lastName: 'Quinn' }
      ],
      emails: ['cec@bellecreekmd.org']
    };
  }
}
