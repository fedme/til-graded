import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stimuli } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-scenario-question',
  templateUrl: 'scenario-question.html',
})
export class ScenarioQuestionPage {

  nextConfirmed: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private stimuli: Stimuli) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScenarioQuestionPage');
  }

  confirmNext() {
    this.nextConfirmed = true;
  }

  next() {
    if (!this.nextConfirmed) return;
    this.navCtrl.setRoot("ScenarioRatingPage");
  }

  
  
}
