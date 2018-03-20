import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ScenarioRatingPage } from './scenario-rating';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ScenarioRatingPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScenarioRatingPage),
    TranslateModule.forChild()
  ],
})
export class ScenarioRatingPageModule {}
