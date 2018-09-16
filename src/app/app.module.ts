import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { QRScanner } from '@ionic-native/qr-scanner';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { SuccessPage } from '../pages/success/success';
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner';
import { ConfirmScanPage } from '../pages/confirm-scan/confirm-scan';
import { ReloadPage } from '../pages/reload/reload';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RechargeProvider } from '../providers/recharge/recharge';
import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    LoginPage,
    LogoutPage,
    SuccessPage,
    QrScannerPage,
    ConfirmScanPage,
    ReloadPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    LoginPage,
    LogoutPage,
    SuccessPage,
    QrScannerPage,
    ConfirmScanPage,
    ReloadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RechargeProvider,
    ConfigProvider
  ]
})
export class AppModule {}
