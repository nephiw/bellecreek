import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDocumentsComponent } from './district-documents.component';

describe('DistrictDocumentsComponent', () => {
  let component: DistrictDocumentsComponent;
  let fixture: ComponentFixture<DistrictDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
