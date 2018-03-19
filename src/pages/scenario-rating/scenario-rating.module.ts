import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ScenarioRatingPage } from './scenario-rating';

@NgModule({
  declarations: [
    ScenarioRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(ScenarioRatingPage),
    TranslateModule.forChild()
  ],
})
export class ScenarioRatingPageModule {}
