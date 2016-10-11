import {RouterModule} from "@angular/router";
import {UnitComponent} from "./unit.component";
import {UnitEntityComponent} from "./unit-entity/unit-entity.component";
import {UnitListComponent} from "./unit-list/unit-list.component";
const routes = [
    {path: "", component: UnitListComponent},
    {path: "create", component: UnitEntityComponent},
    {path: ":id", component: UnitComponent},
    {path: "edit/:id", component: UnitEntityComponent},
    {path: "join/:id", component: UnitEntityComponent},
];

export default RouterModule.forChild(routes);