import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // template: `
  // <div> {{ (af.auth | async)?.uid }} </div>
  // <button (click)="login()">Login</button>
  // <button (click)="logout()">Logout</button>
  // `,
})
export class AppComponent {
  constructor(public af: AngularFire) {}

 login() {
    this.af.auth.createUser({
      email: "m.kobernyk@gmail.com",
      password: "1234567890"
    });
    this.af.auth.login({
      email: "m.kobernyk@gmail.com",
      password: "1234567890"
    });
  }

  logout() {
     this.af.auth.logout();
  }
}