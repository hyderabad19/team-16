import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

var firebaseConfig = {
  apiKey: "AIzaSyD9lBFZ5g5V5q6ztEiOxLKXpADcKKXvbDg",
  authDomain: "learning-curve-18a65.firebaseapp.com",
  databaseURL: "https://learning-curve-18a65.firebaseio.com",
  projectId: "learning-curve-18a65",
  storageBucket: "",
  messagingSenderId: "265200665737",
  appId: "1:265200665737:web:a22bd80a55f1d566"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
