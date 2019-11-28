import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAddressComponent } from './simple-address.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
