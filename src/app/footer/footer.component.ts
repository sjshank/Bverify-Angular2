import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  footerTxt: string = "Copyright © Saurabh Shankariya 2017. Made in Hyderabad, India "

  constructor() { }

  ngOnInit() {
  }

}
