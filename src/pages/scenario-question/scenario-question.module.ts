import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ScenarioQuestionPage } from './scenario-question';

@NgModule({
  declarations: [
    ScenarioQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(ScenarioQuestionPage),
    TranslateModule.forChild()
  ],
})
export class ScenarioQuestionPageModule {}
