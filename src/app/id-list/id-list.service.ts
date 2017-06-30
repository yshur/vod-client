import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Vod } from '../shared/vod.model';

@Injectable()
export class IdListService {
  itemAdded = new EventEmitter<Vod[]>();
  itemSelected = new EventEmitter<Vod>();
  id: number;

  public vod: Vod;//need to get dynamic data from DB

  constructor(private http: Http) {}

  public getDataFromDB (id: number) { //runs only once? 
    this.http.post('https://afternoon-mesa-14708.herokuapp.com/getAgeJson', 
      {id: id})
    .subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.vod = response.json();
        console.log(this.vod);
      }
    );
  }

  getvod(id: number) { //return a copy of the org obj
    this.getDataFromDB(id);
    return this.vod; //should be inside callback?
  }

  getMovies() { 
    return this.vod.movies.slice(); //should be inside callback?
  }

}
