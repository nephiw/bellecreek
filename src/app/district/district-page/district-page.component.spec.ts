import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictPageComponent } from './district-page.component';
import { MockComponents } from 'ng-mocks';
import { DistrictIntroComponent } from './district-intro/district-intro.component';
import { DistrictContactsComponent } from './district-contacts/district-contacts.component';
import { DistrictDocumentsComponent } from './district-documents/district-documents.component';

describe('DistrictPageComponent', () => {
  let component: DistrictPageComponent;
  let fixture: ComponentFixture<DistrictPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DistrictPageComponent,
        MockComponents(
          DistrictIntroComponent,
          DistrictContactsComponent,
          DistrictDocumentsComponent
        )
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
