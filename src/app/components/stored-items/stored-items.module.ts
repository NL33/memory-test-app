import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { StoredItemsRoutingModule } from "./stored-items-routing.module";
import { StoredItemsComponent } from "./stored-items.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        StoredItemsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        StoredItemsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StoredItemsModule { }