import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RechargeProvider } from '../../providers/recharge/recharge';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  intBalance;
  objrequest;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rechargeprovider: RechargeProvider,
    public loadingCtrl: LoadingController
  ) {
    this.getCurrentBalance();
  }

  getCurrentBalance() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.objrequest = {};
    this.rechargeprovider.handlegetCurrentBalance(this.objrequest)
    .then(data => {
      loading.dismiss();
      console.log(JSON.stringify(data));
      this.intBalance = data['current_balance'];
    });
  }

}
