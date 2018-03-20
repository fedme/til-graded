import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stimuli } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-scenario-rating',
  templateUrl: 'scenario-rating.html',
})
export class ScenarioRatingPage {

  rating: number = 50;

  constructor(public navCtrl: NavController, public navParams: NavParams, private stimuli: Stimuli) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScenarioRatingPage');
  }

  getBagSize() {
    return new String(this.rating + "%");
  }

  next() {
    this.stimuli.logRating(this.rating);
    this.navCtrl.setRoot("ScenarioPresentPage");
  }
  
}
