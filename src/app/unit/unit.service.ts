import { Injectable } from '@angular/core';
// import "rxjs/add/operator/map";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UnitService {

  private list;
  private me;

  constructor(private af: AngularFire) {
    this.list = this.af.database.list('/units');
    this.af.auth.subscribe(user => this.me = user);
  }

  getList() {
    return this.list;
  }

  addUnit(name) {
    this.list.push({
      name: name,
      users: [
        this.me.uid
      ]
    });
  }

}
