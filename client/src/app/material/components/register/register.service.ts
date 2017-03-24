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
export class MaterialRegisterService {
    private material: Object = null;

    constructor(private _httpService: AppHttpService, private _bverifyUtil: BverifyUtil) {

    }

    register(material: Object): Observable<boolean> {
        return this._httpService.post(`${APIURL.materialRegister}`, material)
            .map((response: Response) => {
                let material = response.json() && response.json().user;
                if (material){
                    this.material = material;
                    return true;
                }else{
                    return false;
                }            
            })
            .catch(this._bverifyUtil.handleError);
    }

}