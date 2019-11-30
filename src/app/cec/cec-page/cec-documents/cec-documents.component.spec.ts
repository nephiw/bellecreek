import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { CecDocumentsComponent } from './cec-documents.component';
import { DocumentCardComponent } from '@app/shared/document-card';


describe('CecDocumentsComponent', () => {
  let component: CecDocumentsComponent;
  let fixture: ComponentFixture<CecDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CecDocumentsComponent, MockComponents(DocumentCardComponent) ]
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
