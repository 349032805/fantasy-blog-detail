import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AllService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getBlogDetail(id): Observable<any> {
    return this.http.get(`/detail/getBlogDetail/${id}`).map(res => res.json());
  }

  getMainDomainName(): Observable<any> {
    return this.http.get('/detail/getMainDomainName').map(res => res.json());
  }

  getAllMessages(): Observable<any> {
    return this.http.get('/detail/getAllMessages').map(res => res.json());
  }

  addMessage(message): Observable<any> {
    return this.http.post('/detail/addMessage', JSON.stringify(message), this.options);
  }
  addScanNumber(id): Observable<any> {
    return this.http.put(`/detail/addScanNumber/${id}`, this.options);
  }

  countMessagesByIP(): Observable<any> {
    return this.http.post('/detail/countMessagesByIP', this.options);
  }

}
