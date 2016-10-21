import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UnitService } from './unit.service';
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

  constructor(route:ActivatedRoute, private unitService:UnitService) {
    route.params.subscribe(params => {
      this.routeParams = params
    });
    this.unit = this.unitService.getList().map(list => list.find(unit => {
      return unit.$key === this.routeParams.id;
    }));
    this.unitService.setUnit(this.unit);
  }

  join() {
    this.unitService.join();
  }

  ngOnInit() {
  }

}
