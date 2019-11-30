import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingDateService } from '@core/meeting-date.service';

@Component({
  selector: 'bc-district-intro',
  templateUrl: './district-intro.component.html',
  styleUrls: ['./district-intro.component.scss']
})
export class DistrictIntroComponent {
  public nextDate$: Observable<string> = this.meetingDate.getNextDistrictMeeting();

  constructor(private readonly meetingDate: MeetingDateService) { }
}
