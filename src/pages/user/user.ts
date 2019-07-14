import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class AboutPage {
  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = navParams.get('data');
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}