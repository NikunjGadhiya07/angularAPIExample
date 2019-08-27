import { Component, OnInit } from '@angular/core';
import { HttpproxyService } from '../../core/services/index';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../core/models/index';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails;
  apiError = "";

  constructor(private route: ActivatedRoute,
    private proxy: HttpproxyService,
    private location: Location) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.proxy.doGetRequest("https://api.github.com/users/" + name)
      .subscribe((user: User) => {
        this.userDetails = user
        this.apiError = ""
      }, (err) => {
        console.log(err);
        if (err.status === 403) {
          this.apiError = "API rate limitation pls, search after 45 seconds"
        }
        this.userDetails = ''
      });
  }

  onBack(): void {
    this.location.back();
  }

}
