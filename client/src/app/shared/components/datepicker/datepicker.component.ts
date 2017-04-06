import { Component, OnInit, Input, Output } from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.less']
})
export class DatePickerComponent implements OnInit {

    @Input() inputDate: Date;
    


    maxDate: Date = new Date();

    private dpOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
        editableDateField: false,
        disableSince: { year: this.maxDate.getFullYear(), month: this.maxDate.getMonth() + 1, day: this.maxDate.getDate() + 1 }
    };

    constructor() { }

    ngOnInit() {
    }

}
