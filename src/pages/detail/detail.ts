import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SuccessPage } from '../../pages/success/success';
import { QrScannerPage } from '../../pages/qr-scanner/qr-scanner';
import { RechargeProvider } from '../../providers/recharge/recharge';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  inputAmount;
  current_bal;
  final_amount;
  objrequest;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public rechargeprovider: RechargeProvider
  ) {
    this.getCurrentBalance();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
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
        this.current_bal = data['current_balance'];
      });
  }

  public proceedToPay() {
    var self = this;
    self.final_amount = Number(self.current_bal) - Number(self.inputAmount);
    self.updateCurrentBalance(1, self.final_amount);
  }

  updateCurrentBalance(intId, intBalnace) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.objrequest = {};
    this.objrequest['id'] = intId;
    this.objrequest['current_balance'] = intBalnace;
    this.rechargeprovider.handleupdateCurrentBalance(this.objrequest)
      .then(data => {
        loading.dismiss();
        console.log(JSON.stringify(data));
        this.navCtrl.setRoot(SuccessPage, { final_bal: this.final_amount });
      });
  }

  public scan() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(QrScannerPage);
    }, 600);
  }
}
