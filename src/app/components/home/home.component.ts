import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from "tns-core-modules/ui/page";
import * as localStorage from 'nativescript-localstorage';
import { GC } from "utils/utils";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})


export class HomeComponent implements OnInit {
    constructor(private router: RouterExtensions, private page: Page) {
    }

    ngOnInit() {
      console.log('home page loaded')
         this.page.on('navigatedTo', (data) => {
      this.clearStorage();
    })
    }

    clearStorage(){
        localStorage.removeItem('selectedPeople')
    }

    videoPage(){
       this.router.navigate(["video-page"]) 
    }

    listPage() {
        this.router.navigate(["list-page"])
    }
}