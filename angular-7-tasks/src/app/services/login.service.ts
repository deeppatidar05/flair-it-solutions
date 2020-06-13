import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../common/endpoints';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private _http: HttpClient) { }

  loginAsStudent(reqObj) {
    let url = Endpoints.baseUrl + Endpoints.signIn + reqObj;

    return this._http.get(url).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      ),
      map((data: any) => {
        return data.data;
      })
    );
  }

  loginAsInstitution(reqObj) {
    let url = Endpoints.baseUrl + Endpoints.signIn;

    return this._http.post(url, reqObj).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      ),
      map((data: any) => {
        return data.data;
      })
    );
  }

  loginAsOrg(reqObj) {
    let url = Endpoints.baseUrl + Endpoints.signIn;

    return this._http.post(url, reqObj).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      ),
      map((data: any) => {
        return data.data;
      })
    );
  }

  get isLoggedIn() {

    let user: any = JSON.parse(localStorage.getItem("userdata"));
    if(user){
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable(); // {2}
  }

  public getUserID(){
    let user: any = JSON.parse(localStorage.getItem("userdata"));
    return user.id;
  }
  loginSuccess() {
      this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

}
