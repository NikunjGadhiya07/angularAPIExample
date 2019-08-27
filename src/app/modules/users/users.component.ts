import { Component, OnInit } from '@angular/core';
import { HttpproxyService } from '../../core/services/index';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  config: any;
  users = [];
  apiError = "";

  constructor(private proxy: HttpproxyService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10
    };
  }

  ngOnInit() {
    this.proxy.doGetRequest('https://api.github.com/users').subscribe((res) => {
      console.log(res);
      this.users = res;
    })

    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
  }

  pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }

  onSearch(e) {
    console.log(e.target.value);
    var searchString = e.target.value;
    this.proxy.doGetRequest('https://api.github.com/search/users?q=' + searchString).subscribe((res) => {
      this.users = res.items;
      this.apiError = ""
    }, (err) => {
      console.log(err);
      if (err.status === 403) {
        this.apiError = "API rate limitation pls, search after 45 seconds"
      }
      this.users = []
    })
  }

}
