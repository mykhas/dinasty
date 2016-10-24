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
      if (unit.users[0].uid === this.me.uid) {
        unit.isOwner = true;
      }
      return unit;
    }));
  }

  addUnit(name:string) {
    return this.list.push({
      name: name,
      users: [
        {
          uid: this.me.uid,
          position: 'Gk'
        }
      ]
    });
  }

  setUnit(unitId) {
    this.unit = this.af.database.object('/units/' + unitId);
    return this.unit.map(function(unit) {
      if (unit.users[0].uid === this.me.uid) {
        unit.isOwner = true;
      }
      if (unit.users.filter(user => user.uid === this.me.uid).length) {
        unit.isMember = true;
      }
      return unit;
    }.bind(this));
  }

  join() {
    let users;
    this.unit.subscribe(snapshot => {
      users = snapshot.users || [];
    });
    if (!users.filter(user => user.uid === this.me.uid).length) {
      users.push({
        uid: this.me.uid
      });
      this.unit.update({
        users
      })
    }
  }

  updateUser(i:number, user) {
    let users;
    this.unit.subscribe(snapshot => {
      users = snapshot.users;
    });
    users.map((userInList, userIndex) => {
      if(userInList.position === user.position && i != userIndex) {
        userInList.position = '';
      }
      return userInList;
    });
    users[i] = user;
    this.unit.update({
      users
    });
  }

  removeUser(user) {
    let users;
    this.unit.subscribe(snapshot => {
      users = snapshot.users;
    });
    if (users.filter(userInList => user.uid === userInList.uid && userInList.position === user.position).length) {
      users = users.filter(userInList => user.uid !== userInList.uid || userInList.position !== user.position);
      console.log('uuu', users)
      this.unit.update({
        users
      })
    }
  }

  removeUnit(key:string) {
    this.list.remove(key);
  }

}
