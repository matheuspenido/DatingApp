import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/users';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient,
              private accountService: AccountService) {}
  
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    var value = localStorage.getItem('user');

    if (value != null) {
      var user: User = JSON.parse(value);
      this.accountService.setCurrentUser(user);
    }
  }
}
