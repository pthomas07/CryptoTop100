import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService {
  constructor(public http: HttpClient) {}

  public getBitcoinmarketCap() {
    return this.http.get('https://api.coinmarketcap.com/v2/global/');
  }

  public getAllCryptos() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
  }
}
