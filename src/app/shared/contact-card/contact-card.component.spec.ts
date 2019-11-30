import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardComponent } from './contact-card.component';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent
} from '@angular/material/card';
import { MatChipList, MatChip } from '@angular/material/chips';
import { SimpleAddressComponent } from './simple-address/simple-address.component';
import { MockComponents, MockPipe } from 'ng-mocks';
import { ContactNamePipe } from './contact-name.pipe';

describe('ContactCardComponent', () => {
  let component: ContactCardComponent;
  let fixture: ComponentFixture<ContactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactCardComponent,
        MockPipe(ContactNamePipe),
        MockComponents(
          MatCard,
          MatCardHeader,
          MatCardTitle,
          MatCardSubtitle,
          MatCardContent,
          MatChipList,
          MatChip,
          SimpleAddressComponent
        )
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardComponent);
    component = fixture.componentInstance;
    component.contact = {firstName: 'Albert', lastName: 'Adams', emails: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
