import { HomePage } from './../home/home';
import { DataProvider } from './../../providers/data/data';
import { MaterialPage } from './../material/material';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
// import { MaterialPage }

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  phoneNumber: any;
  res:any;
  otp:any;
  id:any;
  public recaptca: firebase.auth.RecaptchaVerifier;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public data:DataProvider) {
  }

  ionViewDidLoad() {
    this.recaptca = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log('ionViewDidLoad LoginPage');
  }

  async signIn(){
    let phoneNumber = this.phoneNumber;
    const appVerifier = this.recaptca;
    const phoneNumberString = "+91" + phoneNumber;
    await firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( confirmationResult => {
         this.res = confirmationResult;
      })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });
    // this.navCtrl.setRoot(MaterialPage);
    // let id = firebase.auth().currentUser;
    // firebase.database().ref(`user/${id}`)
  }
  in(){
    var cred = firebase.auth.PhoneAuthProvider.credential(this.res.verificationId,this.otp);
         firebase.auth().signInWithCredential(cred);
         this.data.currUser = firebase.auth().currentUser.uid;
         if( this.phoneNumber !== null )
         {
           this.navCtrl.setRoot(MaterialPage);
         }

  }
  inAdmin(){
    this.navCtrl.setRoot(HomePage);
  }

}
