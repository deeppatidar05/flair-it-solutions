import { Injectable } from '@angular/core';
import { Endpoints } from '../common/endpoints';
import { Constants } from '../common/constants';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  isLoggedIn$: Observable<boolean>;
  isloggedIn:boolean;
  userId:string;

  constructor(
  private _http: HttpClient,
  private loginService:LoginService)
  {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.isLoggedIn$.subscribe( (isLoggedIn) =>{
         this.isloggedIn = isLoggedIn;
    });

    this.userId = this.loginService.getUserID();
  }

  getInsititutes() {

    let url = "http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/institutes/"

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

  getInsititutesByOffset(offset: number, limit:number) {

    let url = `http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/institutes/?offset=${offset}&limit=${limit}`

    if(this.isloggedIn)
    {
      url += `&userId=${this.userId}`;
    }

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

  getInsititute(id: string) {
    let url = `http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/instituteDetails?id=${id}`

    if(this.isloggedIn)
    {
      url += `&userId=${this.userId}`;
    }

    return this._http.get(url).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  getSubjectDetails(id: string) {
    let url = `http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/subjectDetails?id=${id}`

    if(this.isloggedIn)
    {
      url += `&userId=${this.userId}`;
    }

    return this._http.get(url).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  searchInstitutes(countries: string[], streams: string[], minRank, maxRank, offset, limit){
    let url = `http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/searchInstitutes/?`;
    let param= `offset=${offset}&limit=${limit}`;

    if(this.isloggedIn)
    {
      param += `&userId=${this.userId}`;
    }

    if(minRank && minRank > Constants.MIN_RANK){
      param += `&minRank=${minRank}`;
    }

    if(maxRank && maxRank < Constants.MAX_RANK){
      param += `&maxRank=${maxRank}`;
    }

    if(countries && countries.length>0){
      param += `&countries=${countries}`;
    }

    if(streams && streams.length>0){
      param += `&streams=${streams}`;
    }

    return this._http.get(url+param).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
