import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CecContactsComponent } from './cec-contacts.component';
import { MockComponents } from 'ng-mocks';
import { ContactCardComponent } from '@app/shared/contact-card';
import { ContactGroupCardComponent } from '@app/shared/contact-group-card';

describe('CecContactsComponent', () => {
  let component: CecContactsComponent;
  let fixture: ComponentFixture<CecContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CecContactsComponent,
        MockComponents(ContactCardComponent, ContactGroupCardComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
