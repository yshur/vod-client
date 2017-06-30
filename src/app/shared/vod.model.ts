import { Movie } from './movie.model';

export class Vod {
  constructor(
    public _id: string,
    public type: string, 
    public id: number,
    public ageRange: string,
    public movies: Movie[]) {

  }

}
