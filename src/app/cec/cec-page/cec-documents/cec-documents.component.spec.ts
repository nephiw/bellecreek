import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CecDocumentsComponent } from './cec-documents.component';

describe('CecDocumentsComponent', () => {
  let component: CecDocumentsComponent;
  let fixture: ComponentFixture<CecDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CecDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
