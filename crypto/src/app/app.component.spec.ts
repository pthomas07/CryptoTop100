import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';


describe('AppComponent', () => {
  beforeEach(async(() => {

    // Before each test..give it this testbed configuration
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [ CryptoService ],
      imports: [ HttpClientModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    // arrange -data
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    // assert
    expect(app).toBeTruthy();
  }));


  it('instance of BitcoinMarket',async(() => {
    // arrange
    /* Gives us access to our app --> export class AppComponent */
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;


    // assert
  //  expect(app.bitcoinMarketCap instanceof BitcoinMarket).toBe(true);

  }));



});
