import { MaterialPage } from './../pages/material/material';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import {Push, PushObject, PushOptions } from '@ionic-native/push';


import { HomePage } from '../pages/home/home';

=======
// import { MaterialPage }


>>>>>>> 89ebd424e69dbba62c938ed3f625bd1ea8da5c43
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private push: Push) {
    platform.ready().then(() => {
<<<<<<< HEAD
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might n
=======
>>>>>>> 89ebd424e69dbba62c938ed3f625bd1ea8da5c43
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushsetup();
    });
  }
  pushsetup(){
    const options: PushOptions = {
      android: {
        senderID:'265200665737'
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };
   
   const pushObject: PushObject = this.push.init(options);
   
   
   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   
   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}