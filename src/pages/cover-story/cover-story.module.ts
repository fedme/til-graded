import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CoverStoryPage } from './cover-story';

@NgModule({
  declarations: [
    CoverStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CoverStoryPage),
    TranslateModule.forChild()
  ],
})
export class CoverStoryPageModule {}
