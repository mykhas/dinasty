import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-unit-entity',
  templateUrl: './unit-entity.component.html',
  styleUrls: ['./unit-entity.component.css']
})
export class UnitEntityComponent implements OnInit {
  
  id;

  constructor(route:ActivatedRoute) {
    this.id = route.params.map((p:any) => p.id);
  }

  ngOnInit() {
  }

}
