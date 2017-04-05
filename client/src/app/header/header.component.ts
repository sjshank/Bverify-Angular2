import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { UserService } from '../services/user.service';
/*import { IUser } from '../models/user';*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user = {
    userName: '',
    token: '',
    type: '',
    isAuthenticated: false
  };
  
  title: string = "B-Verify Angular-2";
  subscription: Subscription;


  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this.subscription = this._userService.getUser().subscribe(
      data => {
        if(data.user)
          this.user = data.user;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
