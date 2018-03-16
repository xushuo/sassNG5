import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {Tab} from "../model/tab";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  public currentTab: number = 0;
  public tabs = [];
  public tabScroll: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        console.log(event)
        if (event.urlAfterRedirects == '/' + environment.urlHead + '/account') {
          this.currentTab = 0;
        } else if (event.urlAfterRedirects.startsWith('/' + environment.urlHead + '/useApp')) {
          this.currentTab = 1;
        } else if (event.urlAfterRedirects.startsWith('/' + environment.urlHead + '/monitorMain') || event.urlAfterRedirects.startsWith('/' + environment.urlHead + '/monitorHistory')) {
          this.currentTab = 2;
        } else if (event.urlAfterRedirects.startsWith('/' + environment.urlHead + '/config')) {
          this.currentTab = 3;
        } else if (event.urlAfterRedirects.startsWith('/' + environment.urlHead + '/user')) {
          this.currentTab = 4;
        }
      }
    })
    this.tabs.push(
      new Tab(1, '使用端管理', 'useApp/list', 'assets/img/useApp.png'),
      new Tab(2, '警报监控', 'monitorMain/list', 'assets/img/monitor.png'),
      new Tab(3, '报警配置', 'config/list', 'assets/img/config.png'),
      new Tab(4, '人员管理', 'user/list', 'assets/img/userManager.png'));
  }

  ngOnInit() {
  }

  doTab(item) {
    this.currentTab = item.id
    this.router.navigateByUrl(environment.urlHead + '/' + item.link)
  }
}
