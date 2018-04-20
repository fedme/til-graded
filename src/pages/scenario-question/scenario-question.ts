import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Stimuli } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-scenario-question',
  templateUrl: 'scenario-question.html',
})
export class ScenarioQuestionPage {

  nextConfirmed: boolean = false;
  instructions: string;
  question: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private stimuli: Stimuli, private translate: TranslateService) {

    this.instructions = this.getInstructionsText();
    this.question = this.getQuestionText();
  }

  getInstructionsText() {
    if (this.stimuli.scenario && this.stimuli.scenario.raw.text_2[this.translate.currentLang] != null) {
      return this.stimuli.scenario.raw.text_2[this.translate.currentLang];
    }
    else return this.stimuli.scenario.raw.text_2.en;
  }

  getQuestionText() {
    if (this.stimuli.scenario && this.stimuli.scenario.question.text[this.translate.currentLang] != null) {
      return this.stimuli.scenario.question.text[this.translate.currentLang];
    }
    else return this.stimuli.scenario.question.text.en;
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
