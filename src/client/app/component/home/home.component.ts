import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavigatorService, DialogService } from '../../../../wa-front-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  safe = false;
  routes: any = {};
  constructor(private nav: NavigatorService, private dialog: DialogService, private http: Http) { }

  ngOnInit() {
    // this.nav.notify('from home', 'I feel lonely', !true);
    this.nav.title('Home page');
    this.nav.home(true);
    this.nav.menu([
      { text: 'test', icon: 'home'},
      { text: 'Message', icon: 'swap_vert', action: () => this.dialog.alert('Yahooo!')},
      { text: 'no icon'},
    ]);
    this.http.get('/api/routes').subscribe(res => this.routes = res.json());
    // this.nav.goto('/offers');
  }
  test() {
    this.dialog.confirm('Yo!', 'Yoooooooooooooooooo', ['Grant', 'Deny']);
  }

}
