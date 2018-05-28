import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Stimuli, Utils } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-scenario-present',
  templateUrl: 'scenario-present.html',
})
export class ScenarioPresentPage {

  nextConfirmed: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private stimuli: Stimuli, 
    private utils: Utils, 
    private translate: TranslateService
  ) {

    if (this.stimuli.areThereMoreScenarios()) {
      this.stimuli.goToNextScenario();
      this.utils.shuffleArray(this.stimuli.scenario.question.hints);
    }
    else {
      this.navCtrl.setRoot("EndPage");
    } 
  }

  get instructions() {
    if (this.stimuli.scenario.raw.text_1[this.translate.currentLang] != null) {
      return this.stimuli.scenario.raw.text_1[this.translate.currentLang];
    }
    else return this.stimuli.scenario.raw.text_1.en;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScenarioPresentPage');
  }

  confirmNext() {
    this.nextConfirmed = true;
  }

  next() {
    if (!this.nextConfirmed) return;
    this.navCtrl.setRoot("ScenarioQuestionPage");
  }
  
}
