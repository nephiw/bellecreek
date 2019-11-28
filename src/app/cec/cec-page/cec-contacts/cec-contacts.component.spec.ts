import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CecContactsComponent } from './cec-contacts.component';

describe('CecContactsComponent', () => {
  let component: CecContactsComponent;
  let fixture: ComponentFixture<CecContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CecContactsComponent ]
    })
    .compileComponents();
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
