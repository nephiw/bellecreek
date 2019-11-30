import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAddressComponent } from './simple-address.component';
import { Contact } from '../contact-card.component';

describe('SimpleAddressComponent', () => {
  let component: SimpleAddressComponent;
  let fixture: ComponentFixture<SimpleAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAddressComponent);
    component = fixture.componentInstance;
    component.contact = { address: [] } as unknown as Contact;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
