import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public userName: string = '用户名';

  constructor(public router: Router, public loginService: LoginService) {
  }

  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem("currentUser"));
    if (user) {
      this.userName = user.nickName;
    }
  }

  logout() {
    this.loginService.logoutSer().subscribe((dataJson: any) => {
      if (dataJson.state == 'success') {
        this.router.navigateByUrl(environment.urlHead + '/login')
      }
    })
  }

}
