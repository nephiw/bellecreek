import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CecPageComponent } from './cec-page.component';
import { MockComponents } from 'ng-mocks';
import { CecIntroComponent } from './cec-intro';
import { CecDocumentsComponent } from './cec-documents';
import { CecContactsComponent } from './cec-contacts';
import { MatDivider } from '@angular/material/divider';

describe('CecPageComponent', () => {
  let component: CecPageComponent;
  let fixture: ComponentFixture<CecPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CecPageComponent,
        MockComponents(
          CecIntroComponent,
          CecDocumentsComponent,
          CecContactsComponent,
          MatDivider
        )
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
