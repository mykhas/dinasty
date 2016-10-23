import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {

  constructor(private af: AngularFire) { }

  createUser(userResponse) {
    let user = this.af.database.object('/users/' + userResponse.uid);
    user.set({
      name: userResponse.auth.displayName,
      email: userResponse.auth.email,
      photoURL: userResponse.auth.photoURL
    });
  }

  userIdToUser(userId) {
    let result;
    let user = this.af.database.object('/users/' + userId);
    return user;
  }
}
