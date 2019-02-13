This is an app I quickly put together to test memory performance using Nativescript (5.1), Angular, and iOS.  

The idea is to build up a lot of memory use, and then return to the home page (which is a simple page that does not utilize significant resources) and see if memory use falls back down.

This app utilizes the Nativescript local storage plugin and the nativescript video player plugin.

To evaluate the memory use, I created a webpack build:

$ tns build ios --bundle --env.uglify --env.aot

I also executed a run webpack command, which I have found occasionally necessary as an additional step to run apps directly out of xcode:

$ tns run ios --bundle --env.uglify --env.aot

With that, I opened up the xcode project on xcode, plugged in a device (iPhone or iPad), ran the app, and observed memory use through xcode.

To build up resources, when the app is running on device: 

I recommend going to the Video Page to play a video, and then go to the list page, select a number of items, and then view selections, scrolling through the page. After returning to the Home page (which clears out the local storage), I went through this process a few more times.

After a few more minutes of use, I found the memory usage to be about double the starting level of the app. Then, despite returning to the Home page, it would never fall back close to the original level.
