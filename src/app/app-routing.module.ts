import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "home", loadChildren: "~/app/components/home/home.module#HomeModule" },
	{ path: "list-page", loadChildren: "~/app/components/list-page/list-page.module#ListPageModule" },
	{ path: "stored-items", loadChildren: "~/app/components/stored-items/stored-items.module#StoredItemsModule" },
	{ path: "video-page", loadChildren: "~/app/components/video-page/video-page.module#VideoPageModule" },
]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
