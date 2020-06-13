 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../common/endpoints';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: HttpClient) { }

  addEducation(reqObj,id) {

    let url;
     if(id !== undefined){
        reqObj +=  '&id=' + id;
        url =  Endpoints.baseUrl + Endpoints.updateStudentProfile + reqObj;
     } else{
       url =  Endpoints.baseUrl + Endpoints.addUserProfile + reqObj;
     }
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

  deleteEducation(reqObj){    
    let url = Endpoints.baseUrl + Endpoints.delteStudentProfile + reqObj;

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

  getEducation(reqObj) {
    let url = Endpoints.baseUrl + Endpoints.studentProfileData + reqObj;

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

  convertDatetime(datevalue){
    let event = new Date(datevalue);
    let date = JSON.stringify(event)
    return date.slice(1,11);
  }

  
}
