import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  constructor() { }

  FinalSum: any = 100000;
  BidAmount: any;
  AnualROI: any;
  InHandAmmount: any;
  RemainTenure: any = 12;

  ngOnInit(): void {
    this.BidAmount = this.FinalSum * 0.01;
    this.InHandAmmount = this.FinalSum - this.BidAmount;
    this.AnualROI = this.BidAmount / (this.FinalSum * (this.RemainTenure / 12))
  }

  onKeyFinalAmt(event: any) {
    this.FinalSum = event.target.value
    this.BidAmount = this.FinalSum - this.InHandAmmount;
    this.AnualROI = this.BidAmount / (this.FinalSum * (this.RemainTenure / 12));
  }

  onKeyTenure(event: any) {
    this.RemainTenure = event.target.value
    this.AnualROI = this.BidAmount / (this.FinalSum * (this.RemainTenure / 12));
  }

  onKeyBid(event: any) {
    this.BidAmount = event.target.value;
    this.InHandAmmount = this.FinalSum - this.BidAmount;
    this.AnualROI = this.BidAmount / (this.FinalSum * (this.RemainTenure / 12));
  }

  onKeyROI(event: any) {
    this.AnualROI = event.target.value;
    this.BidAmount = this.AnualROI * this.FinalSum * (this.RemainTenure / 12)
    this.InHandAmmount = this.FinalSum - this.BidAmount;
  }

  onKeyInHand(event: any) {
    this.InHandAmmount = event.target.value;
    this.BidAmount = this.FinalSum - this.InHandAmmount;
    this.AnualROI = this.BidAmount / (this.FinalSum * (this.RemainTenure / 12))
  }
}
