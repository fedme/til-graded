import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SliderFamPage } from './slider-fam';

@NgModule({
  declarations: [
    SliderFamPage,
  ],
  imports: [
    IonicPageModule.forChild(SliderFamPage),
    TranslateModule.forChild()
  ],
})
export class CoverStoryPageModule {}
