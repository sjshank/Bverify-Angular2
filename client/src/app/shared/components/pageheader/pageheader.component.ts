import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.less']
})
export class PageheaderComponent implements OnInit {

  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
