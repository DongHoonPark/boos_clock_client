/**
 * Created by donghoonpark on 16. 10. 7.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestMethod, Headers} from "@angular/http";
import {Observable} from "rxjs";

// declare var $:any;

@Injectable()
export class GenuineTimeService {

  serverUrl:string;
  timeDelay:number = 0;
  isRequesting:boolean = false;
  errorMessage:string = "";
  pingTimes:number[];

  constructor(private http:Http) {
    this.serverUrl = 'http://sugang.snu.ac.kr';
  }
  calculateServerTime(){
    this.isRequesting = true;
    var result = [];
      let timeData = new Observable(observer=> {
        for(let delay of [100,200,300,400,500,600,700,800,900,1000,1100]) {
          setTimeout(()=> {
              let d_prev = Date.now();
              let headers = new Headers({'Content-Type': 'text/plain'});
              let options = new RequestOptions({headers: headers});

              this.http.get('http://ineedcaffeine.xyz:8921'+'/http://sugang.snu.ac.kr', options)
                .subscribe(
                  res=> {
                    let d_after = Date.now();
                    observer.next({
                      prev: d_prev,
                      after: d_after,
                      server: new Date(res.headers.toJSON().date).getTime(),
                      delay: delay
                    });
                  },
                  err=> {
                    console.log(err);
                  });
            }
            , delay);
        }
      });


    let sub = timeData.subscribe(val=>{
      result.push(val);
      if(result.length == 11){
        console.log(result);
        let delayArray:number[] = [];
        for(var i=0; i < result.length-1; i++){
          delayArray.push(result[i].after - result[i+1].after);
          if(result[i].server != result[i+1].server){
            let localResponseEstimatedTime = (result[i+1].prev + result[i+1].after)/2;
            this.timeDelay = result[i+1].server - localResponseEstimatedTime;
            this.isRequesting = false;
          }
        }
        console.log(delayArray)
      }
    });
  }
}
