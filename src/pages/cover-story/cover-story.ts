import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cover-story',
  templateUrl: 'cover-story.html',
})
export class CoverStoryPage {

  nextConfirmed: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverStoryPage');
  }

  confirmNext() {
    this.nextConfirmed = true;
  }

  next() {
    if (!this.nextConfirmed) return;
    this.navCtrl.setRoot('ScenarioPresentPage');
  }

}
