webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.openHome = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
        }, 600);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/login/login.html"*/'\n<ion-content no-bounce class="theme-color">\n\n    <div class="login-content">\n  \n      <div class="appicon" align="center">\n        <img src="./assets/imgs/idea.png">\n        <h2>myRecharge</h2>\n      </div>\n  \n      <form>\n        <ion-item>\n          <ion-input type="number" placeholder="Enter Mobile Number"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Enter Password"></ion-input>\n        </ion-item>\n        <div class="login-buttons">\n          <button ion-button item-left class="primary-btn login-btn" (click)="openHome()">LOGIN</button>\n          <!-- <button ion-button item-right class="primary-btn icon-btn">\n             <ion-icon name="ios-finger-print"></ion-icon>\n          </button> -->\n        </div>\n        <div class="forgot-pwd center">\n        </div>  \n      </form>\n  \n    </div>\n  \n    <div class="footer" align="center">\n      <!-- <ion-icon name="bonfire"></ion-icon> -->\n      <!-- <br/> V 0.0.2 -->\n      <!-- <br/> © JaaG, -->\n      <br/> © All Rights Reserved\n    </div>\n  \n  </ion-content>\n  \n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigProvider = /** @class */ (function () {
    function ConfigProvider(http) {
        this.http = http;
        console.log('Hello ConfigProvider Provider');
        this.Api =
            // 'http://localhost:3000/';//local
            "http://ec2-18-222-216-219.us-east-2.compute.amazonaws.com:3000/"; //dev
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_success_success__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_qr_scanner_qr_scanner__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_recharge_recharge__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, loadingCtrl, rechargeprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.rechargeprovider = rechargeprovider;
        this.getCurrentBalance();
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.getCurrentBalance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.objrequest = {};
        this.rechargeprovider.handlegetCurrentBalance(this.objrequest)
            .then(function (data) {
            loading.dismiss();
            console.log(JSON.stringify(data));
            _this.current_bal = data['current_balance'];
        });
    };
    DetailPage.prototype.proceedToPay = function () {
        var self = this;
        self.final_amount = Number(self.current_bal) - Number(self.inputAmount);
        self.updateCurrentBalance(1, self.final_amount);
    };
    DetailPage.prototype.updateCurrentBalance = function (intId, intBalnace) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.objrequest = {};
        this.objrequest['id'] = intId;
        this.objrequest['current_balance'] = intBalnace;
        this.rechargeprovider.handleupdateCurrentBalance(this.objrequest)
            .then(function (data) {
            loading.dismiss();
            console.log(JSON.stringify(data));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_success_success__["a" /* SuccessPage */], { final_bal: _this.final_amount });
        });
    };
    DetailPage.prototype.scan = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */]);
        }, 600);
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pay / Recharge</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="theme-color">\n    <div class="login-content">\n        <div class="appicon" align="center">\n          <h2>Pay / Recharge for Others </h2>\n        </div>\n          <ion-item>\n              <ion-input type="number" placeholder="Enter Mobile Number" name="mobilenumber"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input type="number" placeholder="Enter Amount" [(ngModel)]="inputAmount"></ion-input>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-label>Choose Carrier</ion-label>\n            <ion-select>\n              <ion-option value="M">Maxis</ion-option>\n              <ion-option value="U">U Mobile</ion-option>\n              <ion-option value="T">Tune Talk</ion-option>\n              <ion-option value="D">Digi</ion-option>\n            </ion-select>\n          </ion-item> -->\n          <ion-row>\n              <button ion-button block (click)="proceedToPay()">Proceed</button>\n          </ion-row>\n          <ion-row>\n              <button ion-button block icon-end (click)="scan()">\n                  Scan QR Code\n                  <ion-icon name="qr-scanner"></ion-icon>\n                </button>\n          </ion-row>\n      </div>\n      <div class="footer" align="center">\n        <!-- <ion-icon name="bonfire"></ion-icon>\n        <br/> V 0.0.2 -->\n        <!-- <br/> © JaaG, -->\n        <br/> © All Rights Reserved\n      </div>\n</ion-content>'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_recharge_recharge__["a" /* RechargeProvider */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_confirm_scan_confirm_scan__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QrScannerPage = /** @class */ (function () {
    function QrScannerPage(navCtrl, navParams, qrScanner, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    QrScannerPage.prototype.ionViewDidLoad = function () {
        this.open_camera();
        console.log('ionViewDidLoad QrScannerPage');
    };
    QrScannerPage.prototype.ionViewWillEnter = function () {
    };
    QrScannerPage.prototype.ionViewWillLeave = function () {
        this.hideCamera();
    };
    QrScannerPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    QrScannerPage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    QrScannerPage.prototype.open_camera = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                _this.showCamera();
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    var scanned_split = text.split(":");
                    _this.scanned_number = scanned_split[1].trim();
                    _this.showpopalert(_this.scanned_number);
                    _this.qrScanner.hide();
                    scanSub_1.unsubscribe();
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                alert('Camera permission denied');
            }
            else {
                alert('Permission denied for this runtime.');
            }
        })
            .catch(function (e) { return console.log("Error in Scan :" + e); });
    };
    QrScannerPage.prototype.proceedToConfirm = function (mob_number) {
        var _this = this;
        if (mob_number) {
            this.hideCamera();
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_confirm_scan_confirm_scan__["a" /* ConfirmScanPage */], { number: mob_number });
            }, 600);
        }
        else {
            this.open_camera();
        }
    };
    QrScannerPage.prototype.showpopalert = function (sub_title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Scanned Number',
            subTitle: sub_title,
            buttons: [
                {
                    text: 'Ok',
                    role: 'ok',
                    handler: function () {
                        console.log('Ok clicked');
                        _this.proceedToConfirm(sub_title);
                    }
                }
            ]
        });
        alert.present();
    };
    QrScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-scanner',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/qr-scanner/qr-scanner.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scan QR Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/qr-scanner/qr-scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QrScannerPage);
    return QrScannerPage;
}());

//# sourceMappingURL=qr-scanner.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_success_success__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recharge_recharge__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmScanPage = /** @class */ (function () {
    function ConfirmScanPage(navCtrl, navParams, loadingCtrl, rechargeprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.rechargeprovider = rechargeprovider;
        this.mob_number = this.navParams.get("number");
        this.getCurrentBalance();
    }
    ConfirmScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmScanPage');
    };
    ConfirmScanPage.prototype.getCurrentBalance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.objrequest = {};
        this.rechargeprovider.handlegetCurrentBalance(this.objrequest)
            .then(function (data) {
            loading.dismiss();
            console.log(JSON.stringify(data));
            _this.current_bal = data['current_balance'];
        });
    };
    ConfirmScanPage.prototype.proceedToPay = function () {
        var self = this;
        self.final_amount = Number(self.current_bal) - Number(self.inputAmount);
        self.updateCurrentBalance(1, self.final_amount);
    };
    ConfirmScanPage.prototype.updateCurrentBalance = function (intId, intBalnace) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.objrequest = {};
        this.objrequest['id'] = intId;
        this.objrequest['current_balance'] = intBalnace;
        this.rechargeprovider.handleupdateCurrentBalance(this.objrequest)
            .then(function (data) {
            loading.dismiss();
            console.log(JSON.stringify(data));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_success_success__["a" /* SuccessPage */], { final_bal: _this.final_amount });
        });
    };
    ConfirmScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-scan',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/confirm-scan/confirm-scan.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Reload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="theme-color">\n  <div class="login-content">\n      <div class="appicon" align="center">\n        <h2>Reload Scanned Number</h2>\n      </div>\n        <ion-item>\n            <ion-label>Mobile {{ mob_number }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" placeholder="Enter Amount" [(ngModel)]="inputAmount"></ion-input>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label>Choose Carrier</ion-label>\n          <ion-select>\n            <ion-option value="M">Maxis</ion-option>\n            <ion-option value="U">U Mobile</ion-option>\n            <ion-option value="T">Tune Talk</ion-option>\n            <ion-option value="D">Digi</ion-option>\n          </ion-select>\n        </ion-item> -->\n        <ion-row>\n            <button ion-button block (click)="proceedToPay()">Proceed</button>\n        </ion-row>\n    </div>\n    <div class="footer" align="center">\n        <!-- <ion-icon name="bonfire"></ion-icon>\n        <br/> V 0.0.2 -->\n        <!-- <br/> © JaaG, -->\n        <br/> © All Rights Reserved\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/confirm-scan/confirm-scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_recharge_recharge__["a" /* RechargeProvider */]])
    ], ConfirmScanPage);
    return ConfirmScanPage;
}());

//# sourceMappingURL=confirm-scan.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/logout/logout.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_success_success__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recharge_recharge__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReloadPage = /** @class */ (function () {
    function ReloadPage(navCtrl, navParams, loadingCtrl, rechargeprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.rechargeprovider = rechargeprovider;
        this.getCurrentBalance();
    }
    ReloadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReloadPage');
    };
    ReloadPage.prototype.getCurrentBalance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.objrequest = {};
        this.rechargeprovider.handlegetCurrentBalance(this.objrequest)
            .then(function (data) {
            loading.dismiss();
            console.log(JSON.stringify(data));
            _this.current_bal = data['current_balance'];
        });
    };
    ReloadPage.prototype.proceedToPay = function () {
        var self = this;
        self.final_amount = Number(self.current_bal) + Number(self.inputAmount);
        self.updateCurrentBalance(1, self.final_amount);
    };
    ReloadPage.prototype.updateCurrentBalance = function (intId, intBalnace) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.objrequest = {};
        this.objrequest['id'] = intId;
        this.objrequest['current_balance'] = intBalnace;
        this.rechargeprovider.handleupdateCurrentBalance(this.objrequest)
            .then(function (data) {
            loading.dismiss();
            console.log(JSON.stringify(data));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_success_success__["a" /* SuccessPage */], { final_bal: _this.final_amount });
        });
    };
    ReloadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reload',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/reload/reload.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Top Up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-bounce class="theme-color">\n  <div class="login-content">\n      <div class="appicon" align="center">\n        <h2>Top Up Own Account</h2>\n      </div>\n        <ion-item>\n          <ion-label>Mobile +919996554230 </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" placeholder="Enter Amount" [(ngModel)]="inputAmount"></ion-input>\n        </ion-item>\n        <ion-row>\n            <button ion-button block (click)="proceedToPay()">Proceed</button>\n        </ion-row>\n    </div>\n    <div class="footer" align="center">\n        <!-- <ion-icon name="bonfire"></ion-icon>\n        <br/> V 0.0.2 -->\n        <!-- <br/> © JaaG, -->\n        <br/> © All Rights Reserved\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/reload/reload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_recharge_recharge__["a" /* RechargeProvider */]])
    ], ReloadPage);
    return ReloadPage;
}());

//# sourceMappingURL=reload.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_logout_logout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_success_success__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_qr_scanner_qr_scanner__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_confirm_scan_confirm_scan__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reload_reload__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_recharge_recharge__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_config_config__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_confirm_scan_confirm_scan__["a" /* ConfirmScanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_reload_reload__["a" /* ReloadPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_confirm_scan_confirm_scan__["a" /* ConfirmScanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_reload_reload__["a" /* ReloadPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_recharge_recharge__["a" /* RechargeProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_config_config__["a" /* ConfigProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reload_reload__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, loadingCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], menuicon: 'contact' },
            { title: 'Reload', component: __WEBPACK_IMPORTED_MODULE_8__pages_reload_reload__["a" /* ReloadPage */], menuicon: 'card' },
            { title: 'Pay', component: __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__["a" /* DetailPage */], menuicon: 'cash' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__["a" /* LogoutPage */], menuicon: 'exit' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.nav.setRoot(page.component);
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.menuicon}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['card'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Recharge ' + i,
                note: 'Recharge details #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recharge History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="theme-color">\n  <ion-list>\n    <button ion-item *ngFor="let item of items">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <!-- <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RechargeProvider = /** @class */ (function () {
    function RechargeProvider(http, configs) {
        this.http = http;
        this.configs = configs;
        console.log('Hello RechargeProvider Provider');
        this.apiUrl = configs.Api;
    }
    RechargeProvider.prototype.handlegetCurrentBalance = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'topup/getUserCurrentBalance', data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RechargeProvider.prototype.handleupdateCurrentBalance = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'topup/updateUserCurrentBalance', data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RechargeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigProvider */]])
    ], RechargeProvider);
    return RechargeProvider;
}());

//# sourceMappingURL=recharge.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recharge_recharge__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, rechargeprovider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rechargeprovider = rechargeprovider;
        this.loadingCtrl = loadingCtrl;
        this.getCurrentBalance();
    }
    HomePage.prototype.getCurrentBalance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.objrequest = {};
        this.rechargeprovider.handlegetCurrentBalance(this.objrequest)
            .then(function (data) {
            loading.dismiss();
            console.log(JSON.stringify(data));
            _this.intBalance = data['current_balance'];
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="theme-color">\n    <div class="login-content">\n        <div class="appicon" align="center">\n            <img src="./assets/imgs/boy.png" style="width:40%">\n            <h2>Agaile Victor</h2>\n            <p class="title">Senior Software Engineer, Implementation</p>\n            <img src="./assets/imgs/agaile.png" style="width:40%">\n        </div>\n        <div class="login-buttons">\n              <p class="title" align="center">Your Current Balance</p>\n              <h2 class="title" align="center"><i class="fa fa-rupee"> :</i> {{ intBalance }}</h2>\n        </div>\n        <div class="forgot-pwd center"></div>  \n    </div>\n    <div class="footer" align="center">\n        <!-- <ion-icon name="bonfire"></ion-icon>\n        <br/> V 0.0.2 -->\n        <!-- <br/> © JaaG, -->\n        <br/> © All Rights Reserved\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_recharge_recharge__["a" /* RechargeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessPage = /** @class */ (function () {
    function SuccessPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    SuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessPage');
    };
    SuccessPage.prototype.proceedToDash = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */], { bal: _this.fbal });
        }, 600);
    };
    SuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success',template:/*ion-inline-start:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/success/success.html"*/'\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Payment Status</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content no-bounce class="theme-color">\n    <div class="login-content">\n        <div class="appicon" align="center">\n          <h2>Thank You.</h2>\n        </div>\n        <p align="center">Thank you, Your payment was successfull</p>\n        <p align="center">Merchant Reference # : 1000007998 </p>\n        <p align="center">Transaction # : 2001 </p>\n        <ion-row>\n          <button ion-button block (click)="proceedToDash()">Return to Profile</button>\n        </ion-row>\n    </div>\n    <div class="footer" align="center">\n        <!-- <ion-icon name="bonfire"></ion-icon>\n        <br/> V 0.0.2 -->\n        <!-- <br/> © JaaG, -->\n        <br/> © All Rights Reserved\n    </div>\n</ion-content>\n  \n'/*ion-inline-end:"/Users/Agaile.Victor/Desktop/Agailez/WorkSpace/Ionic_Workspace/TopUp/src/pages/success/success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], SuccessPage);
    return SuccessPage;
}());

//# sourceMappingURL=success.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map