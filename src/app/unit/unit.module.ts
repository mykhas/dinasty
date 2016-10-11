import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit.component';
import unitRoutes from './unit.routes';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitEntityComponent } from './unit-entity/unit-entity.component';

@NgModule({
  imports: [
    CommonModule,
    unitRoutes
  ],
  declarations: [UnitComponent, UnitListComponent, UnitEntityComponent]
})
export class UnitModule { }
