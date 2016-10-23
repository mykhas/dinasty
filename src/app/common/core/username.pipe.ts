import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from './user.service';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  constructor(private userService: UserService) {}

  transform(value: any, args?: any): any {
    let user = this.userService.userIdToUser(value);
    return user.map(user => user.name);
  }

}
