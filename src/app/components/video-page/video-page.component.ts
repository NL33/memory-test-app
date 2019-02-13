import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import * as utils from "tns-core-modules/utils/utils";
import { Video } from 'nativescript-videoplayer';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
registerElement("videoPlayer", () => Video);

@Component({
    selector: "VideoPage",
    moduleId: module.id,
    templateUrl: "./video-page.component.html",
})

export class VideoPageComponent implements OnInit {
    @ViewChild("videoPlayer") _videoPlayer: ElementRef;
    public videoURL: any

    constructor(private routerExtensions: RouterExtensions, public page: Page) {
    }


    ngOnInit(): void {
        console.log('loaded video page')
        this.videoURL = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        this.page.on('navigatingFrom', (data) => {
            console.log('player should be destroyed')
             this._videoPlayer.nativeElement.destroy();
        })
    }

    listPage() {
        this.routerExtensions.navigate(["list-page"], {clearHistory: true})
    }


} 