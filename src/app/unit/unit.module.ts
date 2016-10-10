import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit.component';
import unitRoutes from './unit.routes';

@NgModule({
  imports: [
    CommonModule,
    unitRoutes
  ],
  declarations: [UnitComponent]
})
export class UnitModule { }
