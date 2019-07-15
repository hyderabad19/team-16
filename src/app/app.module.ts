import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudymaterialPage } from './../pages/studymaterial/studymaterial';
import { MaterialPage } from './../pages/material/material';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import {UserPage} from '../pages/user/user';
=======
import { SearchPage } from '../pages/search/search';
import { FeedBackPage } from '../pages/feed-back/feed-back';
import {} from '../pages/studymaterial/studymaterial';
import { ContentDetailPage } from '../pages/content-detail/content-detail';
import { DataProvider } from '../providers/data/data';
>>>>>>> 89ebd424e69dbba62c938ed3f625bd1ea8da5c43

var firebaseConfig = {
  apiKey: "AIzaSyD9lBFZ5g5V5q6ztEiOxLKXpADcKKXvbDg",
  authDomain: "learning-curve-18a65.firebaseapp.com",
  databaseURL: "https://learning-curve-18a65.firebaseio.com",
  projectId: "learning-curve-18a65",
  storageBucket: "gs://learning-curve-18a65.appspot.com/",
  messagingSenderId: "265200665737",
  appId: "1:265200665737:web:a22bd80a55f1d566"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [

    MyApp,
    HomePage,
    UserPage,
    
  ],

    MyApp,FeedBackPage,
    HomePage,
    SearchPage,
    ContentDetailPage,
    LoginPage,
    MaterialPage,
    StudymaterialPage
    ],
>>>>>>> 89ebd424e69dbba62c938ed3f625bd1ea8da5c43
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],   
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    UserPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    push,
    
    FeedBackPage,
    SearchPage,
    ContentDetailPage,
    LoginPage,
    MaterialPage,
    StudymaterialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,DataProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

