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

    register(material: Object): Observable<any> {
        return this._httpService.post(`${APIURL.materialRegister}`, material)
            .map((response: Response) => <any> response.json())
            .catch(this._bverifyUtil.handleError);
    };

    retrieve(id: string): Observable<boolean> {
        return this._httpService.get(`${APIURL.retrieveMaterial}${id}`)
            .map((response: Response) => <any> response.json())
            .catch(this._bverifyUtil.handleError);
    };

    list(): Observable<any> {
        return this._httpService.get(`${APIURL.materialList}`)
            .map((response: Response) => <any> response.json())
            .catch(this._bverifyUtil.handleError);
    }

}