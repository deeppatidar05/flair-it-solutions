import { Injectable } from '@angular/core';
import { Endpoints } from '../common/endpoints';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterestCareerService {

  constructor(private _http: HttpClient) { }


  getCareerInterests() {
    let url = "http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/interests/"

    return this._http.get(url).pipe(
      tap(
        // Log the result or error
        data => console.log(data),
        error => console.log(error)
      ),
      map((data: any) => {
        return data.data;
      })
    );

  }
}
