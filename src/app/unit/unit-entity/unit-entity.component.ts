import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-entity',
  templateUrl: './unit-entity.component.html',
  styleUrls: ['./unit-entity.component.css']
})
export class UnitEntityComponent implements OnInit {

  id;

  constructor(route:ActivatedRoute, private unitService:UnitService) {
    console.log(route.params);
    this.id = route.params.map((p:any) => p.id);
  }

  ngOnInit() {
  }

  create(unitName) {
    console.log(unitName);
    this.unitService.addUnit(unitName);
  }

}
