import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.less']
})
export class FileuploadComponent implements OnInit {

  uploader:FileUploader = new FileUploader({url:''});
  constructor() { }

  ngOnInit() {
  }

  fileChange(event):void{
    console.log(event);
  }
}
