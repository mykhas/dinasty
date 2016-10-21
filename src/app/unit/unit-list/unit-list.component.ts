import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {
  items: FirebaseListObservable<any>;

  constructor(public af: AngularFire, private unitService:UnitService) {
    this.items = unitService.getList();
  }

  ngOnInit() {
  }

  remove(key:string) {
    this.unitService.removeUnit(key);
  }

}
