import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from '@core/landing-page';
import { CoreModule } from '@core/core.module';
import { RouterModule } from '@angular/router';

const dateBuilder = {
  build: (params?: any) => {
    return params ? new Date(params) : new Date();
  }
};

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    { provide: 'Window', useFactory: () => window },
    { provide: 'Document', useFactory: () => document },
    { provide: 'DateBuilder', useValue: dateBuilder }
  ],
  exports: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
