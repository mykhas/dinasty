import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public af: AngularFire, private userService: UserService) {}

  login() {
    this.af.auth.login().then(response => {
      console.log('response after auth', response);
      this.userService.createUser(response);
    });
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
