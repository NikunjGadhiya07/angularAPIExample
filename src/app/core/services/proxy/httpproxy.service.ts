import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpproxyService {

  constructor(private httpClient: HttpClient) { }

  doPostRequest(url: string, data: object): Observable<any> {
    return this.httpClient.post(url, data);
  }

  doGetRequest(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
