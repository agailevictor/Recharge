import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ConfirmScanPage } from '../../pages/confirm-scan/confirm-scan';

@Component({
  selector: 'page-qr-scanner',
  templateUrl: 'qr-scanner.html',
})
export class QrScannerPage {

  public scanned_number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private qrScanner: QRScanner,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    this.open_camera();
    console.log('ionViewDidLoad QrScannerPage');
  }

 ionViewWillEnter(){ 
 }

 ionViewWillLeave(){
    this.hideCamera(); 
 }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
  
  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

  public open_camera(){
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.showCamera();
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         let scanned_split = text.split(":");
         this.scanned_number = scanned_split[1].trim();
         this.showpopalert(this.scanned_number);
         this.qrScanner.hide();
         scanSub.unsubscribe(); 
        });
        this.qrScanner.show();
      } else if (status.denied) {
        alert('Camera permission denied');
      } else {
        alert('Permission denied for this runtime.');
      }
    })
    .catch((e: any) => console.log("Error in Scan :" + e));
  }

  public proceedToConfirm(mob_number){
    if( mob_number ){
        this.hideCamera();
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.setRoot(ConfirmScanPage, { number : mob_number });
        }, 600);
    }else{
      this.open_camera();
    }
  }

  public showpopalert(sub_title){
    let alert = this.alertCtrl.create({
      title: 'Scanned Number',
      subTitle: sub_title,
      buttons: [      
          {
          text: 'Ok',
          role: 'ok',
          handler: () => {
            console.log('Ok clicked');
            this.proceedToConfirm(sub_title);
          }
        }
      ]
    });
    alert.present();
  }

}
