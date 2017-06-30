import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Vod } from '../shared/vod.model';

@Injectable()
export class IdmovieListService {
  itemAdded = new EventEmitter<Vod[]>();
  itemSelected = new EventEmitter<Vod>();
  id: number;
  movie: string;

  public vod: Vod;//need to get dynamic data from DB

  constructor(private http: Http) {}

  public getDataFromDB (id: number, movie: string) { //runs only once? 
    this.http.post('https://afternoon-mesa-14708.herokuapp.com/getAgeJson', 
      {id: id, movie: movie})
    .subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.vod = response.json();
        console.log(this.vod);
      }
    );
  }

  getvod(id: number, movie: string) { //return a copy of the org obj
    this.getDataFromDB(id, movie);
    return this.vod; //should be inside callback?
  }

  getMovies() { 
    return this.vod.movies.slice(); //should be inside callback?
  }

}
