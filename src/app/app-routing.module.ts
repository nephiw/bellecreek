import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '@core/landing-page';

const routes: Routes = [
  { path: '', data: { title: 'Welcome' }, component: LandingPageComponent },
  {
    path: 'cec',
    data: { title: 'CEC / HOA' },
    loadChildren: () => import('./cec/cec.module').then(m => m.CecModule)
  },
  {
    path: 'district',
    data: { title: 'Metro District' },
    loadChildren: () =>
      import('./district/district.module').then(m => m.DistrictModule)
  },
  {
    path: 'events',
    data: { title: 'Community Event / Meetings' },
    loadChildren: () =>
      import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'contact',
    data: { title: 'Contact Us' },
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
