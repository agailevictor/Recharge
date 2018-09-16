import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController   } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {
  fbal;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }
  public proceedToDash(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(HomePage, { bal : this.fbal });
    }, 600);
  }

}
