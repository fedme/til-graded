import { Component } from '@angular/core';
import { Stimuli } from '../../providers/providers';

@Component({
  selector: 'asker-monster',
  templateUrl: 'asker-monster.html'
})
export class AskerMonsterComponent {

  constructor(private stimuli: Stimuli) {
    console.log('Hello AskerMonster Component');

  }

  getAskerSrc() {
    return this.getPng(this.stimuli.scenario.raw.asker);
  }
  
  getBubblePic(id: number) {
    return this.getPng(this.stimuli.scenario.question.bubble[id]);
  }

  getPng(name: string) {
    return "assets/img/" + name + ".png"
  }

}
