import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: '../qrcode.component.html'
})
export class AppQrCodeComponent implements OnInit {
  @Input() qrData: string;
  constructor() { }

  ngOnInit() {

  }

}
