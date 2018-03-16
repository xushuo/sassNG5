import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from "../environments/environment";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from "./login/login.service";
import {NavComponent} from './nav/nav.component';
import {TabComponent} from './tab/tab.component';
import {UserListComponent} from './user-list/user-list.component';
import {UseAppListComponent} from './use-app-list/use-app-list.component';
import {MonitorMainListComponent} from './monitor-main-list/monitor-main-list.component';
import {MonitorHistoryListComponent} from './monitor-history-list/monitor-history-list.component';
import {ConfigListComponent} from './config-list/config-list.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonpModule} from "@angular/http";

const routeConfig: Routes = [
  {path: '', redirectTo: '/' + environment.urlHead + '/useApp/list', pathMatch: 'full'},
  {path: environment.urlHead + '/login', component: LoginComponent},
  {
    path: environment.urlHead, component: HomeComponent,
    children: [
      {path: '', redirectTo: 'useApp/list', pathMatch: 'full'},
      {path: 'useApp/list', component: UseAppListComponent},
      {path: 'monitorMain/list', component: MonitorMainListComponent},
      {path: 'monitorHistory/list', component: MonitorHistoryListComponent},
      {path: 'config/list', component: ConfigListComponent},
      {path: 'user/list', component: UserListComponent},
    ]
  },
  {path: '**', redirectTo: '/' + environment.urlHead}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    TabComponent,
    UserListComponent,
    UseAppListComponent,
    MonitorMainListComponent,
    MonitorHistoryListComponent,
    ConfigListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig, {'useHash': true})
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
