import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stimuli } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-scenario-question',
  templateUrl: 'scenario-question.html',
})
export class ScenarioQuestionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private stimuli: Stimuli) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScenarioQuestionPage');
  }

  next() {
    this.navCtrl.setRoot("ScenarioRatingPage");
  }
  
}
