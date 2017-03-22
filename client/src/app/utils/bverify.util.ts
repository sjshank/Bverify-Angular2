import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response} from '@angular/http';

export class BverifyUtil {
    constructor(){}

    handleError(error: Response): Observable<any> {
        return Observable.throw("Error");
    }
}