import { MaterialPage } from './../material/material';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';
import { AboutPage } from './../about/about';
=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';
>>>>>>> 89ebd424e69dbba62c938ed3f625bd1ea8da5c43

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

  goTo(color) {
    color = color || 'No Color Entered';

    this.navCtrl.push(AboutPage, {
      data: color
    });
  }
}