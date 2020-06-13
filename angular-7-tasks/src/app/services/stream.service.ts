import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  constructor(private _http: HttpClient) { }

  getStreams() {
    let url = "http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/streams"

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
