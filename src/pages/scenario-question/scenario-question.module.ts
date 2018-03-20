import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ScenarioQuestionPage } from './scenario-question';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ScenarioQuestionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScenarioQuestionPage),
    TranslateModule.forChild()
  ],
})
export class ScenarioQuestionPageModule {}
