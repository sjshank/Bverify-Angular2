import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService {
    private subject = new Subject<any>();

    setUser(model) {
        this.subject.next({ user: model });
    }

    clearMessage() {
        this.subject.next();
    }

    getUser(): Observable<any> {
        return this.subject.asObservable();
    }
}