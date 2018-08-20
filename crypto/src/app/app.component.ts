import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BitcoinMarket } from '../models/bitcoin-market.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // create new instance of Bitcoin Market class (store api data)
  public bitcoinMarketCap : BitcoinMarket = new BitcoinMarket();

  constructor (public cryptoService: CryptoService) {
    this.getBitcoinStats();
  }

  public getBitcoinStats(): void {
    // subscribe to the observable
    this.cryptoService.getBitcoinmarketCap().subscribe((data: any) => {
      // store data --> Bitcoin Market Class
      this.bitcoinMarketCap = new BitcoinMarket(data);
      // console.log(this.bitcoinMarketCap);
    });
  }
}
