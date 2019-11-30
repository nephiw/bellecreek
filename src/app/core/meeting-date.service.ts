import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const MEETING_START_TIME = 18;
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

@Injectable({
  providedIn: 'root'
})
export class MeetingDateService {
  private nextMeeting$: BehaviorSubject<string>;
  private get3rdWednesday = this.getPrettyDate.bind(this, 3, 3);
  private get1stTuesday = this.getPrettyDate.bind(this, 1, 2);

  constructor(@Inject('DateBuilder') private readonly dateBuilder: any) {}

  /*
    today: a date object to base the calculation on
    dayOfWeek: Sunday (0) - Saturday (6)
    nthWeek: The ordinal week of the month

    For example, if you want the 2nd Saturday of the week, the call would be:
    this.repeatedDayOfMonth(new Date(), 6, 2);
  */
  private repeatedDayOfMonth(today: Date, nthWeek: number, dayOfWeek: number): number {
    const weekAdjustment = (nthWeek - 1) * 7;
    const firstDayOfMonth = this.dateBuilder.build(today.getTime());
    firstDayOfMonth.setDate(1);

    const firstDayOfWeek = firstDayOfMonth.getDay();
    // The days are 0 based, so we start by adding one to ensure that there are no 0th day of the week.
    // The days of the week start on Sunday, so Wednesday is the day at index 3, though it is the 4th day.
    // We add the seven to ensure that there are no negative numbers... the modulo 7 gets rid of it.
    const firstWeekDay = 1 + ((dayOfWeek - firstDayOfWeek + 7) % 7);
    return firstWeekDay + weekAdjustment;
  }

  private getPrettyDate(nthWeek: number, dayOfWeek: number): string {
    const today = this.dateBuilder.build();
    let month: string;
    let year = today.getFullYear();
    let day = this.repeatedDayOfMonth(today, nthWeek, dayOfWeek);

    if (
      today.getDate() < day ||
      (today.getDate() === day && today.getHours() < MEETING_START_TIME)
    ) {
      month = MONTH_NAMES[today.getMonth()];
    } else {
      let nextMonth = today.getMonth() + 1;
      if (nextMonth < 12) {
        month = MONTH_NAMES[nextMonth];
        today.setMonth(nextMonth);
        day = this.repeatedDayOfMonth(today, nthWeek, dayOfWeek);
      } else {
        // In case we are after the last meeting in December
        nextMonth = 0;
        month = MONTH_NAMES[nextMonth];
        year = year + 1;
        today.setFullYear(year);
        today.setMonth(nextMonth);
        day = this.repeatedDayOfMonth(today, nthWeek, dayOfWeek);
      }
    }

    return `${month} ${day}, ${year}`;
  }

  public getNextCECMeeting(): Observable<string> {
    this.nextMeeting$ = new BehaviorSubject(this.get3rdWednesday());
    return this.nextMeeting$.asObservable();
  }

  public getNextDistrictMeeting(): Observable<string> {
    this.nextMeeting$ = new BehaviorSubject(this.get1stTuesday());
    return this.nextMeeting$.asObservable();
  }
}
