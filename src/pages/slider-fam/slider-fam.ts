import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'slider-fam',
  templateUrl: 'slider-fam.html',
})
export class SliderFamPage {

  @ViewChild('sweetsBag') sweetsBag: ElementRef;

  rating: number = 50;
  changed: boolean = false;
  nextConfirmed: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.changed = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderFamPage');
  }

  sliderChanged(evt) {
    this.changed = true;
    const width = (40 + (evt.value * 60/100)) + "%"
    //console.log(width)
    this.sweetsBag.nativeElement.style.width = width
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
    this.navCtrl.setRoot('ScenarioPresentPage');
  }

}
