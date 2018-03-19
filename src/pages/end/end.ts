import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-end',
  templateUrl: 'end.html',
})
export class EndPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndPage');
    //this.data.save();  TODO: Save data!!!!!!!!!!!
  }

  next() {
    this.navCtrl.setRoot("RegistrationPage");
    this.navCtrl.popToRoot();
  }

}
