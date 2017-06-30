import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Vod } from '../shared/vod.model';

@Injectable()
export class DefaultListService {
  itemAdded = new EventEmitter<Vod[]>();
  itemSelected = new EventEmitter<Vod>();

  public vods: Vod[] = [];//need to get dynamic data from DB

  constructor(private http: Http) {}

  public getDataFromDB () { //runs only once? 
    this.http.get('https://afternoon-mesa-14708.herokuapp.com/getAllData')
    .subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.vods = response.json();
        this.itemAdded.next(this.vods.slice());//emits a change
        console.log(this.vods);
      }
    );
  }

  getvods() { //return a copy of the org obj
    this.getDataFromDB();
    return this.vods.slice(); //should be inside callback?
  }

  getMovies(vod: Vod) { 
    return vod.movies.slice(); //should be inside callback?
  }

  onVodAdded(vod: Vod) {
    this.vods.push(vod);
    this.itemAdded.emit(this.vods.slice());
  }


}
