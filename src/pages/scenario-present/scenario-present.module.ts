import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ScenarioPresentPage } from './scenario-present';

@NgModule({
  declarations: [
    ScenarioPresentPage,
  ],
  imports: [
    IonicPageModule.forChild(ScenarioPresentPage),
    TranslateModule.forChild()
  ],
})
export class ScenarioPresentPageModule {}
