import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginService {

  constructor(public http: HttpClient, public routerInfo: Router) {
  }

  public login(data) {
    return this.http.post(environment.url + 'login', data)
  }

  public logoutSer() {
    return this.http.post(environment.url + 'logout', {})
  }

  public logout(): void {
    this.routerInfo.navigateByUrl(environment.urlHead + '/login');
  }
}
