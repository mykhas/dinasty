import { RouterModule }   from "@angular/router";

const routes = [{
  "path": "",
  "loadChildren": "app/unit/unit.module#UnitModule"
}];

export default RouterModule.forRoot(routes);