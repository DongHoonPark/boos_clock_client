import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'developer',
  templateUrl: 'developer.component.html'
})
export class DeveloperComponent implements OnInit {
  constructor(private router:Router) {
  }

  ngOnInit() {
  }
  route(to:string){
    this.router.navigate(['/'+to]);
  }
}
