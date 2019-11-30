import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingDateService } from '@app/core/meeting-date.service';

@Component({
  selector: 'bc-cec-intro',
  templateUrl: './cec-intro.component.html',
  styleUrls: ['./cec-intro.component.scss']
})
export class CecIntroComponent {
  public nextDate$: Observable<string> = this.meetingDate.getNextCECMeeting();
  constructor(private readonly meetingDate: MeetingDateService) { }
}
