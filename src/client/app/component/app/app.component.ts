import { Component, OnInit, Inject, HostListener, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { MenuItemClass } from '@ts-webapp/common';
import { LoaderService, MenuService, UserService, DialogService, NavigatorService } from '../../../../wa-front-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  isHome = false;
  user = false;
  loading = false;
  title = 'TS-APP';
  menu: MenuItemClass[] = [];
  subMenu: any[] = [];
  constructor(private userService: UserService, private menuService: MenuService, private dialogService: DialogService, private loaderService: LoaderService, private navigator: NavigatorService) {}
  ngOnInit() {
    this.loaderService.check().subscribe(loading => this.loading = loading);
    this.navigator.title().subscribe(title => this.title = title);
    this.navigator.home().subscribe(home => this.isHome = home);
    this.userService.check(true).subscribe(response => this.user = response.user);
    this.navigator.menu().subscribe(menu => this.subMenu = menu);
    this.menuService.getItems().subscribe(items => this.menu = items);
    // this.msgService.confirm('Yo!');
  }
  back() {
    this.navigator.back();
  }
  logout() {
    this.dialogService.confirm('Log out', 'Are you sure you want to log out?').subscribe(ok => ok && this.userService.logout());
  }
}
