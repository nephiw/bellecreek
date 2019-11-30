import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CecIntroComponent } from './cec-intro.component';
import { MeetingDateService } from '@app/core';

describe('CecIntroComponent', () => {
  let component: CecIntroComponent;
  let fixture: ComponentFixture<CecIntroComponent>;
  let meetingDateService: jasmine.SpyObj<MeetingDateService>;

  beforeEach(async(() => {
    meetingDateService = jasmine.createSpyObj('MeetingDateService', ['getNextCECMeeting'])

    TestBed.configureTestingModule({
      declarations: [ CecIntroComponent ],
      providers: [{ provide: MeetingDateService, useValue: meetingDateService}]
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
