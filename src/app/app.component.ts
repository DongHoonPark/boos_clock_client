import { Component } from '@angular/core';
import { GenuineTimeService } from './genuineTime/genuine-time.service'
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GenuineTimeService ]
})
export class AppComponent {
  title = 'app works!';
  constructor(private gts:GenuineTimeService, private router:RouterLink){}
  debug(){
    this.gts.calculateServerTime();
  }
}
