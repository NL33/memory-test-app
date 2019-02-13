import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { VideoPageRoutingModule } from "./video-page-routing.module";
import { VideoPageComponent } from "./video-page.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VideoPageRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        VideoPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VideoPageModule { }