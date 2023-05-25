import { Component,OnInit  } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'keisan';
  constructor(private currencyPipe: CurrencyPipe) { }

  FinalSum: any = 1000000;
  BidAmount: any;
  AnualROI: any;
  InHandAmmount: any;
  RemainTenure: any = 12;
  hasError: any

  ngOnInit(): void {
    this.BidAmount = this.FinalSum * 0.01;
    this.InHandAmmount = this.FinalSum - this.BidAmount;
    this.AnualROI = 100 * 0.01
  }

  onKeyFinalAmt(event: any) {
    this.FinalSum = event.target.value
    this.BidAmount = this.FinalSum - this.InHandAmmount;
    this.AnualROI = (this.BidAmount * 100) / (this.FinalSum * (this.RemainTenure / 12));
  }

  onKeyTenure(event: any) {
    this.RemainTenure = event.target.value
    this.AnualROI = (this.BidAmount * 100) / (this.FinalSum * (this.RemainTenure / 12));
  }

  onKeyBid(event: any) {
    this.BidAmount = event.target.value;
    this.InHandAmmount = this.FinalSum - this.BidAmount;
    this.AnualROI = (this.BidAmount * 100) / (this.FinalSum * (this.RemainTenure / 12));
  }

  onKeyROI(event: any) {
    this.AnualROI = event.target.value;
    this.BidAmount = (this.AnualROI/100) * this.FinalSum * (this.RemainTenure / 12)
    this.InHandAmmount = this.FinalSum - this.BidAmount;
  }

  onKeyInHand(event: any) {
    this.InHandAmmount = event.target.value;
    this.BidAmount = this.FinalSum - this.InHandAmmount;
    this.AnualROI = (this.BidAmount * 100)  / (this.FinalSum * (this.RemainTenure / 12))
  }


}
