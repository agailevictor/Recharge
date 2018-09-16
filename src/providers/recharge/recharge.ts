import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

@Injectable()
export class RechargeProvider {
  public apiUrl : string;
  constructor(
    public http: HttpClient,
    public configs : ConfigProvider
    ) {
    console.log('Hello RechargeProvider Provider');
    this.apiUrl = configs.Api;
  }

  handlegetCurrentBalance(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'topup/getUserCurrentBalance', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  handleupdateCurrentBalance(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'topup/updateUserCurrentBalance', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
