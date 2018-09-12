import { Injectable, EventEmitter } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Utils } from '../utils/utils';
import { Participant } from '../../models/participant';
import { SCENARIOS } from './scenarios';
import { SCENARIOS_SHORT } from './scenarios-short';
import { AppInfo } from './app-info';

@Injectable()
export class Stimuli {

  appInfo: AppInfo = AppInfo;

  public langChangedEvent: EventEmitter<string> = new EventEmitter();

  // general exp
  shortVersion: boolean;
  condition: any;
  conditionId: number;
  initialTimestamp: number;
  participant: Participant;
  conditionCounterOverride: number = null;
  runInBrowser: boolean = false;

  // scenarios
  scenarios: any;
  scenarioIndex: number = -1;
  ratings: number[] = [];

  constructor(
    private utils: Utils,
    private platform: Platform
  ) {
    console.log('Hello Stimuli Provider');
    this.participant = new Participant("anonymous-" + this.utils.getCounterValue());
    //this.runInBrowser = this.platform.is('core') || this.platform.is('mobileweb'); TODO: not detecting windows UWA
    this.runInBrowser = false
    console.log("You are running", this.platform)
  }

  initialize() {
    this.shortVersion = false; // TODO
    this.scenarioIndex = -1;
    this.ratings = [];
    this.initialTimestamp = Date.now();
    this.participant = new Participant("anonymous-" + this.utils.getCounterValue());
  }

  initializeConditions(isShortVersion: boolean = false) {
    if (isShortVersion) {
      this.shortVersion = true;
    }
    this.initialTimestamp = Date.now();
    this.pickCondition();
    this.setupScenarios();
  }

  pickCondition() {
    // Pick a condition
    if (this.shortVersion) {
      this.condition = this.utils.pickOneConditionShort();
    }
    else {
      this.condition = this.utils.pickFirstCondition();
    }
    this.conditionId = this.condition['id'];
    console.log('Picked condition', this.condition);
  }

  setupScenarios() {

    // scenarios present fixed order 2 4 1 6 7 8 5 3
    this.scenarios = [];
    let scenariosIds = [2, 4, 1, 6, 7, 8, 5, 3];
    let allScenarios = SCENARIOS;

    if (this.shortVersion) {
      scenariosIds = [1, 2];
      allScenarios = SCENARIOS_SHORT;
    }

    for (let id of scenariosIds) {
      this.scenarios.push({
        "raw": allScenarios[id - 1],
        "question_id": this.condition['s_' + id],
        "question": allScenarios[id - 1]['questions'][this.condition['s_' + id] - 1]
      });
    }

    console.log("[Stimuli] scenarios", this.scenarios);

  }

  get scenario(): any {
    if (this.scenarioIndex < 0) return null;
    return this.scenarios[this.scenarioIndex];
  }

  areThereMoreScenarios(): boolean {
    return this.scenarioIndex < this.scenarios.length - 1;
  }

  goToNextScenario() {
    this.scenarioIndex++;
  }

  logRating(rating: number) {
    this.ratings.push(rating);
  }


  // TODO: age groups
  getParticipantAgeGroup(age: number): string {
    if (this.participant.age >= 18) return "18";
    return this.participant.age + "";
  }

  setLang(langCode: string) {
    this.langChangedEvent.emit(langCode);
  }

}
