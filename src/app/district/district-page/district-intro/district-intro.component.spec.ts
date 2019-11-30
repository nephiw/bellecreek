import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictIntroComponent } from './district-intro.component';
import { MeetingDateService } from '@app/core';

describe('DistrictIntroComponent', () => {
  let component: DistrictIntroComponent;
  let fixture: ComponentFixture<DistrictIntroComponent>;
  let meetingDateService: jasmine.SpyObj<MeetingDateService>;

  beforeEach(async(() => {
    meetingDateService = jasmine.createSpyObj('MeetingDateService', ['getNextDistrictMeeting'])

    TestBed.configureTestingModule({
      declarations: [ DistrictIntroComponent ],
      providers: [{ provide: MeetingDateService, useValue: meetingDateService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
