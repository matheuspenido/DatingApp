import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/users';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) { 
  }

  ngOnInit(): void {
    console.log("ON INIT:");
    console.log(this.accountService.currentUser$.subscribe(x => {console.log(x)}));
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log("ON LOGIN:");
      console.log(this.accountService.currentUser$.subscribe(x => {console.log(x)}));
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  logout() {
    console.log("ON LOGOUT:");
    console.log(this.accountService.currentUser$.subscribe(x => {console.log(x)}));
    this.accountService.logout();
  }
}
