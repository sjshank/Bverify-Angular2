import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import {APIURL} from '../../../config/app.constants'

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.less']
})
export class FileuploadComponent implements OnInit {

  uploader:FileUploader = new FileUploader({url:`${APIURL.upload}`});
  constructor() { }

  ngOnInit() {
  }

  fileChange(event):void{
    this.uploader.queue[0].upload();
  }
}
