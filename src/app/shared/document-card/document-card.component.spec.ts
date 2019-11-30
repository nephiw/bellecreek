import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCardComponent } from './document-card.component';
import { MockComponents } from 'ng-mocks';
import {
  MatCard,
  MatCardHeader,
  MatCardSubtitle,
  MatCardContent,
  MatCardActions,
  MatCardTitle
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { DocumentService } from '../document.service';

describe('DocumentCardComponent', () => {
  let component: DocumentCardComponent;
  let fixture: ComponentFixture<DocumentCardComponent>;
  let documentService: jasmine.SpyObj<DocumentService>;

  beforeEach(async(() => {
    documentService = jasmine.createSpyObj('DocumentService', ['downloadFile']);

    TestBed.configureTestingModule({
      declarations: [
        DocumentCardComponent,
        MockComponents(
          MatCard,
          MatCardHeader,
          MatCardTitle,
          MatCardSubtitle,
          MatCardContent,
          MatCardActions,
          MatButton
        )
      ],
      providers: [{ provide: DocumentService, useValue: documentService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
