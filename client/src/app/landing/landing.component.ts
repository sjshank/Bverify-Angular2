import { Component, OnInit } from '@angular/core';
import { PRODUCER_LINKS, MANUFACTURER_LINKS, RETAILER_LINKS  } from './landing.constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  title:string="Landing Screen";
  producerLinks = PRODUCER_LINKS;
  manufactLinks = MANUFACTURER_LINKS;
  retailLinks = RETAILER_LINKS;

  constructor() { }

  ngOnInit() {
  }

}
