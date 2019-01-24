import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class NumberService {

  constructor(private http: HttpClient) { }

  getNumber(): Observable<any> {
    return this.http.get('http://34.76.27.90:8080/get');
  }

  postNumber(): Observable<any> {
    return this.http.post('http://34.76.27.90:8080/post', {
      number: Math.floor(Math.random() * 100)+1
    });
  }
}
