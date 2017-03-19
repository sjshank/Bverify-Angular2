import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title:string ="B-Verify Angular-2";
  constructor() { }

  ngOnInit() {
  }

}
