import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { StoredItemsComponent } from "./stored-items.component";

const routes: Routes = [
    { path: "", component: StoredItemsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StoredItemsRoutingModule { }