import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserveService {

  constructor(private http: HttpClient) { }
  register(obj): Observable<any> {
    return this.http.post("http://localhost:3000/users", obj)
  }

  login(obj): Observable<any> {
    return this.http.post("http://localhost:3000/users", obj)
  }

  checkUser(obj): Observable<any> {
    return this.http.get(`http://localhost:3000/users?username=${obj}`, obj)
  }


}
