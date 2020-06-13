import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }

  public addFavourite(university: any){
    console.log('Add favourite university called');
  }
}
