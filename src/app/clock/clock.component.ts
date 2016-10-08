import {Component, OnInit} from '@angular/core';
import {GenuineTimeService} from "../genuineTime/genuine-time.service";

@Component({
  selector: 'clock',
  templateUrl: 'clock.component.html'
})
export class ClockComponent implements OnInit {
  hour:string;
  minute:string;
  second:string;
  millis:number;
  constructor(private gts:GenuineTimeService) {
  }

  ngOnInit() {
    setInterval(()=>{
      let d = new Date()
      let realtime = d.getTime() + this.gts.timeDelay;
      let r = new Date(realtime);
      let hour_prefix = '';
      let minute_prefix = '';
      let second_prefix = '';
      if(this.hour < 10){
        hour_prefix = '0';
      }
      if(this.minute < 10){
        minute_prefix = '0';
      }
      if(this.second < 10){
        second_prefix = '0';
      }
      this.hour = hour_prefix + r.getHours().toString();
      this.minute = minute_prefix + r.getMinutes().toString();
      this.second = second_prefix + r.getSeconds().toString();
      this.millis = r.getMilliseconds();
    },50);
  }

  sync(){
    this.gts.calculateServerTime();
  }
}
