import { Component, OnInit } from '@angular/core';
import { NavigatorService, UserService, DialogService } from '../../../../wa-front-angular';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  user = false;

  constructor(private nav: NavigatorService, private userService: UserService, private dialog: DialogService) { }

  ngOnInit() {
    this.userService.check().subscribe(response => this.user = response.user);
    this.nav.title('Side page');
    this.nav.home(true);
    this.nav.menu([
      { text: 'test', icon: 'home'},
      { text: 'name?', action: () => 
        this.dialog.ask('Name', 'What is your name?', 'Demman CRUISE').subscribe(name => 
          console.info('name:', name === null ? 'canceled': name)
        )
      },
    ]);
    console.log(this.user);
  }

}
