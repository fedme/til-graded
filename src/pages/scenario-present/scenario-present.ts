import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stimuli, Utils } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-scenario-present',
  templateUrl: 'scenario-present.html',
})
export class ScenarioPresentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private stimuli: Stimuli, private utils: Utils) {
    //this.stimuli.initialize();
    if (this.stimuli.areThereMoreScenarios()) {
      this.stimuli.goToNextScenario();
      this.utils.shuffleArray(this.stimuli.scenario.question.hints);
    }
    else {
      this.navCtrl.setRoot("EndPage");
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScenarioPresentPage');
  }

  next() {
    this.navCtrl.setRoot("ScenarioQuestionPage");
  }
  
}
