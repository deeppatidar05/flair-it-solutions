import { Injectable } from '@angular/core';
import { Endpoints } from '../common/endpoints';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };


  constructor(private _http: HttpClient) { }



  // ?email=&password=&name=&phone=&mobile=&type=

  registerAsStudent(reqObj) {

    let payload = new FormData();

    payload.append("email", reqObj.email);
    payload.append("password", reqObj.password);
    payload.append("name", reqObj.name);
    payload.append("phone", reqObj.phone);
    payload.append("mobile", reqObj.mobile);
    payload.append("type", "STUDENT");

    let url = Endpoints.baseUrl + Endpoints.signUp;
    console.log("url", url);
    console.log("req body", reqObj);



    return this._http.post(url, payload).pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      ),
      map((data: any) => {
        return data;
      })
    );
  }


  registerAsInstitution(reqObj) {
    let url = Endpoints.baseUrl + Endpoints.signUp;

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



  registerAsOrg(reqObj) {
    let url = Endpoints.baseUrl + Endpoints.signUp;

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
  getCountryCodeJson() {
    return this._http.get('assets/json/countryCode.json');
  }

}
