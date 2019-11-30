import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockPipe } from 'ng-mocks';

import { ContactGroupCardComponent } from './contact-group-card.component';
import { MatChip, MatChipList } from '@angular/material/chips';
import {
  MatCard,
  MatCardTitle,
  MatCardHeader,
  MatCardSubtitle,
  MatCardContent
} from '@angular/material/card';
import { ContactNamePipe } from '../contact-card';

describe('ContactGroupCardComponent', () => {
  let component: ContactGroupCardComponent;
  let fixture: ComponentFixture<ContactGroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactGroupCardComponent,
        MockPipe(ContactNamePipe),
        MockComponents(
          MatCard,
          MatCardTitle,
          MatCardHeader,
          MatCardSubtitle,
          MatCardContent,
          MatChip,
          MatChipList
        )
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGroupCardComponent);
    component = fixture.componentInstance;

    component.group = { members: [], emails: [] }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
