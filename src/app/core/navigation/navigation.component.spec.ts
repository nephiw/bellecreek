import { async, ComponentFixture, TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let route: any;
  let router: any;
  let eventsSubject: Subject<any>;

  beforeEach(async(() => {
    route = { snapshot: { data: {} } };
    eventsSubject = new Subject();
    router = { events: eventsSubject.asObservable() };

    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatToolbarModule, MatIconModule, MatSidenavModule],
      declarations: [NavigationComponent],
      providers: [
        { provide: ActivatedRoute, useValue: route },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
  });

  function buildNavigationEvent(): NavigationEnd {
    return new NavigationEnd(0, 'https://example.com', 'https://example.com');
  }

  describe('route title', () => {
    it('does not build the title when none are set', fakeAsync(() => {
      eventsSubject.next(buildNavigationEvent());
      flushMicrotasks();
      fixture.detectChanges();
      const element = fixture.debugElement.query(By.css('#pageTitle'));
      expect(element).toBeNull();
    }));

    xit('updates the title from snapshot', fakeAsync(() => {
      route.snapshot.data.title = 'Test Title';

      eventsSubject.next(buildNavigationEvent());
      flushMicrotasks();
      fixture.detectChanges();

      const element = fixture.debugElement.query(By.css('#pageTitle'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.textContent).toContain('Test Title');
    }));
  });
});
