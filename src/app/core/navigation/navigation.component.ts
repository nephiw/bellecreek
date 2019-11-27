import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'bc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public viewTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.getRouteTitle(this.route.firstChild))
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  private getRouteTitle(route: ActivatedRoute | null): string {
    if (!route) {
      return '';
    }

    while (route) {
      if (route.firstChild) {
        route = route.firstChild;
      } else if (route.snapshot.data && route.snapshot.data.title) {
        return route.snapshot.data.title;
      } else {
        return '';
      }
    }
    return '';
  }
}
