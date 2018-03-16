import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem("currentUser"));
    if (!user) {
      this.router.navigateByUrl(environment.urlHead + '/login')
    }
  }

}
