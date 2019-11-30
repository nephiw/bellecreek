import { fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { MeetingDateService } from './meeting-date.service';

describe('MeetingDateService', () => {
  let service: MeetingDateService;
  let today: Date;
  let dateBuilder: jasmine.SpyObj<{ build: (params: any) => Date }>;

  beforeEach(() => {
    dateBuilder = jasmine.createSpyObj('DateBuilder', ['build']);
    dateBuilder.build.and.callFake((params: any) => {
      return params ? new Date(params) : today;
    });
    service = new MeetingDateService(dateBuilder);
  });

  describe('getNextCECMeeting', () => {
    let meetingDate: Date;
    let nextSubSpy: jasmine.Spy;

    beforeEach(() => {
      // November, 15th 2000 is the earliest 3rd Wednesday
      meetingDate = new Date('2000-11-15T12:00:00');
      nextSubSpy = jasmine.createSpy();
    });

    it('shows today when the meeting is later today', fakeAsync(() => {
      today = meetingDate;
      service.getNextCECMeeting().subscribe(nextSubSpy);
      flushMicrotasks();
      expect(nextSubSpy).toHaveBeenCalledWith('November 15, 2000');
    }));

    it('shows next month when the meeting has already started', fakeAsync(() => {
      const sixHours15Minutes = 6.25 * 60 * 60 * 1000;
      meetingDate.setTime(meetingDate.getTime() + sixHours15Minutes);
      today = meetingDate;

      service.getNextCECMeeting().subscribe(nextSubSpy);
      flushMicrotasks();
      expect(nextSubSpy).toHaveBeenCalledWith('December 20, 2000');
    }));

    describe('when the next meeting is next year', () => {
      it('returns a date next year', fakeAsync(() => {
        today = new Date('2000-12-29T12:00:00');

        service.getNextCECMeeting().subscribe(nextSubSpy);
        flushMicrotasks();
        expect(nextSubSpy).toHaveBeenCalledWith('January 17, 2001');
      }));
    });
  });

  describe('getNextDistrictMeeting', () => {
    let meetingDate: Date;
    let nextSubSpy: jasmine.Spy;

    beforeEach(() => {
      // August, 1st 2000 is a Tuesday
      meetingDate = new Date('2000-08-01T12:00:00');
      nextSubSpy = jasmine.createSpy();
    });

    it('shows today when the meeting is later today', fakeAsync(() => {
      today = meetingDate;
      service.getNextDistrictMeeting().subscribe(nextSubSpy);
      flushMicrotasks();
      expect(nextSubSpy).toHaveBeenCalledWith('August 1, 2000');
    }));

    it('shows next month when the meeting has already started', fakeAsync(() => {
      const sixHours15Minutes = 6.25 * 60 * 60 * 1000;
      meetingDate.setTime(meetingDate.getTime() + sixHours15Minutes);
      today = meetingDate;

      service.getNextDistrictMeeting().subscribe(nextSubSpy);
      flushMicrotasks();
      expect(nextSubSpy).toHaveBeenCalledWith('September 5, 2000');
    }));

    describe('when the next meeting is next year', () => {
      it('returns a date next year', fakeAsync(() => {
        today = new Date('2000-12-16T12:00:00');

        service.getNextDistrictMeeting().subscribe(nextSubSpy);
        flushMicrotasks();
        expect(nextSubSpy).toHaveBeenCalledWith('January 2, 2001');
      }));
    });
  });
});
