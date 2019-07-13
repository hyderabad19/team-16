import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the ContentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html',
})
export class ContentDetailPage {
  show:boolean
  image_url="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_0016c93c710cf35990b999cba3a59bae/firebase.png";
  userName="User name goes here";
  postedDate="Post Created Date";
  likesCount="0";
  comment_list=["First Comment","Second Comment","Third Comment"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentDetailPage');
  }

  commentPost(){
    console.log("here",this.show);
    if(this.show===false || this.show===undefined){
      this.show=true;
    }
    else
    {
      this.show=false;
    }
  }
  
}
