import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { BverifyUtil } from '../../../utils/bverify.util';
import { APIURL } from '../../../config/app.constants';
import { AppHttpService } from '../../../utils/http.service';

@Injectable()
export class ProductShipService {
    private product: Object = null;

    constructor(private _httpService: AppHttpService, private _bverifyUtil: BverifyUtil) {

    }

    ship(product: Object): Observable<boolean> {
        return this._httpService.post(`${APIURL.productShip}`, product)
            .map((response: Response) => {
                let product = response.json() && response.json().user;
                if (product){
                    this.product = product;
                    return true;
                }else{
                    return false;
                }            
            })
            .catch(this._bverifyUtil.handleError);
    };

    retrieve(id: string): Observable<boolean> {
        return this._httpService.get(`${APIURL.retrieveProduct}id`)
            .map((response: Response) => {
                let product = response.json() && response.json().user;
                if (product){
                    this.product = product;
                    return true;
                }else{
                    return false;
                }            
            })
            .catch(this._bverifyUtil.handleError);
    };

}