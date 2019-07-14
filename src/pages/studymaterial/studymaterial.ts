import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from'firebase';
import {DomSanitizer} from '@angular/platform-browser';
//import {DomSanitizationService} from '@angular/platform-browser/esm/src/security/dom_sanitization_service';

/**
 * Generated class for the StudymaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studymaterial',
  templateUrl: 'studymaterial.html',
})
export class StudymaterialPage {
  url:any;
  name:any;
  urls:any[];
  personid:any[];
  u:any;
  // sanitizer: DomSanitizationService;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public doms : DomSanitizer
    ) {
    // var id = firebase.auth().currentUser.uid;
    firebase.database().ref('orgusers/m2wKLWiF2BVCYBobNr6BGpTLlmJ2/materials').on('value',s=>{
      this.urls=[]
      s.forEach(snap=>{this.urls.push(this.doms.bypassSecurityTrustResourceUrl(snap.val().url))
        
    })
    console.log(this.urls)
    })
  }
  /*cleanURL(u)
  {
    return this.sanitize.bypassSecurityTrustResourceUrl(u);
  }
   sanitize()
    {for(this.u in this.urls)
    return this.doms.bypassSecurityTrustUrl(this.u)
   }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudymaterialPage');
  }

}
