import { MaterialPage } from './../material/material';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  emails:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  inAdmin(){
    // if(this.emails.localeCompare('bolusanir@gmail.com'))
    // {
      console.log( 'Success' );
      this.navCtrl.setRoot(MaterialPage);
    // }
    
  }

}
