import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CecIntroComponent } from './cec-intro.component';

describe('CecIntroComponent', () => {
  let component: CecIntroComponent;
  let fixture: ComponentFixture<CecIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CecIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
