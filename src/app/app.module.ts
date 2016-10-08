import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Jsonp, JsonpModule} from '@angular/http';
import {RouterModule, RouterLink} from '@angular/router'

import { AppComponent } from './app.component';

import { ServerTimeViewPageComponent } from './serverTimeViewPage/server-time-view-page'
import { GenuineTimeComponent } from './genuineTime/genuine-time.component'
import { NgSemanticModule } from 'ng-semantic'

import { ClockComponent} from './clock/clock.component'
import { HomeComponent } from './home/home.component'
import {DeveloperComponent} from "./developer/developer.component";
import {DonationComponent} from "./donation/donation.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerTimeViewPageComponent,
    GenuineTimeComponent,
    ClockComponent,
    HomeComponent,
    DeveloperComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'clock',
        component: ClockComponent
      },
      {
        path: 'developer',
        component: DeveloperComponent
      },
      {
        path: 'donation',
        component: DonationComponent
      }
    ]),
    NgSemanticModule
  ],
  providers: [RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
