import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { UserService } from './user.service';
import { UsernamePipe } from './username.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UserService],
  declarations: [CoreComponent, UsernamePipe],
  exports: [UsernamePipe]
})
export class CoreModule { }
