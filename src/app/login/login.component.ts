import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {User} from "../model/user";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginUser = new User();
  public error: Error;

  constructor(public loginService: LoginService, public routerInfo: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
    let temp = {"username": this.loginUser.userName, "password": this.loginUser.password}
    this.loginService.login(temp).subscribe(
      (data: any) => {
        console.log(data)
        let dataJson = data;
        console.log(dataJson);
        if (dataJson.state == 'success') {
          console.log('登录成功');
          let user = new User();
          user.nickName = dataJson.data.name;
          sessionStorage.removeItem('currentUser');
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.routerInfo.navigateByUrl("/" + environment.urlHead + '/useApp/list');
        } else {
          console.log('用户登录失败');
          this.error = dataJson.message;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

}
