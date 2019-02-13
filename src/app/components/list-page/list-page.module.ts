import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { ListPageRoutingModule } from "./list-page-routing.module";
import { ListPageComponent } from "./list-page.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ListPageRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ListPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListPageModule { }