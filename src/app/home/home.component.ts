/**
 * Created by donghoonpark on 16. 10. 8.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  route(to:string){
    this.router.navigate(['/'+to]);
  }
}
