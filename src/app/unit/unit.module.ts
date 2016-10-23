import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { UnitComponent } from './unit.component';
import unitRoutes from './unit.routes';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitEntityComponent } from './unit-entity/unit-entity.component';
import { UnitService } from './unit.service';
import { CoreModule } from '../common/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    unitRoutes
  ],
  providers: [UnitService],
  declarations: [UnitComponent, UnitListComponent, UnitEntityComponent]
})
export class UnitModule { }
