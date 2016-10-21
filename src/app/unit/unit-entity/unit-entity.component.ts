import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-entity',
  templateUrl: './unit-entity.component.html',
  styleUrls: ['./unit-entity.component.css']
})
export class UnitEntityComponent implements OnInit {

  id;

  constructor(
    route:ActivatedRoute,
    private unitService:UnitService,
    private router: Router
  ) {
    console.log(route.params);
    this.id = route.params.map((p:any) => p.id);
  }

  ngOnInit() {
  }

  create(unitName) {
    this.unitService.addUnit(unitName).then(unit => {
      // TODO: find more elegant way to work with promise's result
      // this.router.navigate([unit.path.o[1]]);
      this.router.navigate(['']);
    });
  }

}
