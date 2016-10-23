import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/first";
import "rxjs/add/operator/take";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UnitService {

  private list;
  private me;
  private unit;

  constructor(private af: AngularFire) {
    this.list = this.af.database.list('/units');
    this.af.auth.subscribe(user => this.me = user);
  }

  getList() {
    return this.list.map(list => list.map(unit => {
      if (unit.users.includes(this.me.uid)) {
        unit.isRemovable = true;
      }
      return unit;
    }));
  }

  addUnit(name:string) {
    return this.list.push({
      name: name,
      users: [
        this.me.uid
      ]
    });
  }

  setUnit(unitId) {
    this.unit = this.af.database.object('/units/' + unitId);
    return this.unit;
  }

  join() {
    let users;
    this.unit.subscribe(snapshot => {
      users = snapshot.users;
    });
    if (!users.includes(this.me.uid)) {
      users.push(this.me.uid);
      console.log(users);
      this.unit.update({
        users
      })
    }
  }

  removeUser(uid:string) {
    let users;
    this.unit.subscribe(snapshot => {
      users = snapshot.users;
    });
    if (users.includes(uid)) {
      console.log(uid, users.indexOf(uid), users);
      users = users.filter(user => user !== uid);
      this.unit.update({
        users
      })
    }
  }

  removeUnit(key:string) {
    this.list.remove(key);
  }

}
