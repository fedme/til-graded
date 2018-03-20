import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Stimuli } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-scenario-rating',
  templateUrl: 'scenario-rating.html',
})
export class ScenarioRatingPage {

  rating: number = 50;
  changed: boolean = false;
  nextConfirmed: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private stimuli: Stimuli, private toastCtrl: ToastController) {
    this.changed = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScenarioRatingPage');
  }

  sliderChanged() {
    this.changed = true;
  }

  getBagSize() {
    return new String(this.rating + "%");
  }

  confirmNext() {
    if (!this.changed) {
      const toast = this.toastCtrl.create({
        message: "You haven't touched the slider",
        duration: 1000,
        position: 'top'
      });
      toast.present();
      return;
    }
    this.nextConfirmed = true;
  }

  next() {
    if (!this.nextConfirmed) return;
    this.stimuli.logRating(this.rating);
    this.navCtrl.setRoot("ScenarioPresentPage");
  }
  
}
