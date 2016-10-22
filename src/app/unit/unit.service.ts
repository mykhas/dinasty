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

  // setUnit(unit) {
  //   this.unit = unit;
  //   console.log('in setUnit');
  //   this.unitJoinActions = Observable.create(function(observer) {
  //     this.unitJoinActionsObserver = observer;
  //   }.bind(this));
  //   // it smells
  //   this.unit.subscribe(function(unit) {
  //     this.unitJoinActions.subscribe(function() {
  //       unit.users.push(this.me.uid);
  //       this.list.update(unit.$key, {
  //         name: unit.name,
  //         users: unit.users
  //       });
  //       return unit;
  //     }.bind(this));
  //   }.bind(this));
  // }

  setUnit(unitId) {
    this.unit = this.list = this.af.database.object('/units/' + unitId);
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

  removeUnit(key:string) {
    this.list.remove(key);
  }

}