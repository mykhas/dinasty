import { RouterModule }   from '@angular/router';

import { LoginComponent } from './common/login/login.component';

const routes = [{
  "path": "",
  "component": LoginComponent
}, {
  "path": "**",
  "component": LoginComponent
}];

export default RouterModule.forRoot(routes);