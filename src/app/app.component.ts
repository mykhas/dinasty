import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let team of teams | async">
      <input type="text" #updatetext [value]="team.name" />
      <button (click)="updateItem(team.$key, updatetext.value)">Update</button>
      <button (click)="deleteItem(team.$key)">Delete</button>
    </li>
  </ul>
  <input type="text" #newitem />
  <button (click)="addItem(newitem.value)">Add</button>
  <button (click)="deleteEverything()">Delete All</button>
  `,
})
export class AppComponent {
  players: FirebaseListObservable<any>;
  teams: FirebaseListObservable<any>;
  constructor(af: AngularFire, private http: Http) {
    this.players = af.database.list('/players');
    this.teams = af.database.list('/teams');
  }
  addItem(newName: string) {
    this.teams.push({ name: newName });
  }
  updateItem(key: string, newText: string) {
    this.teams.update(key, { name: newText });
  }
  deleteItem(key: string) {
    this.teams.remove(key);
  }
  deleteEverything() {
    this.teams.remove();
  }
}