import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
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

  public recaptca: firebase.auth.RecaptchaVerifier;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
        let prompt = this.alertCtrl.create({
        title: 'Enter the Confirmation code',
        inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
        buttons: [
          { text: 'Cancel',
            handler: data => { console.log('Cancel clicked'); }
          },
          { text: 'Send',
            handler: data => {

              confirmationResult.confirm(data.confirmationCode)
              .then(function (result) {
                console.log(result.user);
                // ...
              }).catch(function (error) {
                // User couldn't sign in (bad verification code?)
                // ...
              });
            }
          }
        ]
      });
      prompt.present();
      // firebase.auth().signOut()
      
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });
    this.navCtrl.setRoot('');
    let id = firebase.auth().currentUser;
    firebase.database().ref(`user/${id}`)
  }

}
