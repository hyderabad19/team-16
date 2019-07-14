import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'; 
import { StudymaterialPage } from '../studymaterial/studymaterial';
// import { DataProvider }

/**
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {
  materials:any[];
  myFile:any;
  url:any;
  name:any;
  urls:any[];
  personid:any[];
  videoUrl:any='';
  videoName:any = '';
  id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
   

  
    }

  ionViewDidLoad() {
    this.id = 'm2wKLWiF2BVCYBobNr6BGpTLlmJ2';
    console.log('ionViewDidLoad MaterialPage');
  }
  noteMaterial(event){
    this.myFile=event.target.files[0];
  }
  
  upload(){
    // var id = 'm2wKLWiF2BVCYBobNr6BGpTLlmJ2';
    firebase.database().ref('users/'+this.id).once('value',snapshot=>{
      firebase.storage().ref('materials/'+this.myFile.name).put(this.myFile).then(_=>{
        console.log("sucess")
        firebase.storage().ref('materials/'+this.myFile.name).getDownloadURL().then(url=>{
          console.log(url)
          firebase.database().ref(`orgusers/${this.id}/materials`).push({
            url:url,
            materialName:this.myFile.name
          })
        })
        .catch(e=>{
          console.log(e)
        })
      })
      this.navCtrl.push(StudymaterialPage)
      })
  }
  uploadVid(){
    if(this.videoUrl == ''){
      alert("Empty Url")
    }else{
      // var id = firebase.auth().currentUser.uid;
      firebase.database().ref(`orgusers/m2wKLWiF2BVCYBobNr6BGpTLlmJ2/videos`).push({
        vidName:this.videoName,
        vidUrl:this.videoUrl
      }).then(() => {
        console.log('Success')
        this.navCtrl.push(StudymaterialPage)
      })
    }
  }
}
