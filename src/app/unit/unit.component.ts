import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UnitService } from './unit.service';
import { UserService } from '../common/core/user.service';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  id;
  unit;
  routeParams;
  public position: string = '1';

  constructor(route:ActivatedRoute, private unitService:UnitService) {
    this.unit = this.unitService.setUnit(route.snapshot.params['id']);
  }

  join() {
    this.unitService.join();
  }

  removeUser(uid:string) {
    this.unitService.removeUser(uid);
  }

  ngOnInit() {
  }

}
