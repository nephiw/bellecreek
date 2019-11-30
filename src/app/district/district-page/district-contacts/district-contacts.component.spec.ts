import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictContactsComponent } from './district-contacts.component';

describe('DistrictContactsComponent', () => {
  let component: DistrictContactsComponent;
  let fixture: ComponentFixture<DistrictContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
