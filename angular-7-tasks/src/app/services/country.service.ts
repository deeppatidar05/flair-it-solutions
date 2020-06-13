import { Injectable } from '@angular/core';
import { Endpoints } from '../common/endpoints';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl = "http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/";
  getCountriesUrl = "countries";

  selectedCountry = null;

  constructor(private _http: HttpClient) { }

  getCountries() {
    let url = this.baseUrl + this.getCountriesUrl;
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

  getCountryDataByID(countryID) {
    let url = this.baseUrl + "countryDetails?id=" + countryID;

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

  getCountryDataByName() {
    let url = this.baseUrl + this.getCountriesUrl + "?name=" + this.selectedCountry.name;
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

  getCountryEducationDataById() {
    let url = this.baseUrl + "countryEducations?countryId=" + this.selectedCountry.id;
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

  getCountryFunFactsDataById() {
    let url = this.baseUrl + "countryFunFacts?countryId=" + this.selectedCountry.id;
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

  getCountryStatisticsDataById() {
    let url = this.baseUrl + "countryStatistics?countryId=" + this.selectedCountry.id;
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
}


