import { Component, OnInit, Input } from '@angular/core';
import { Vod } from '../../shared/vod.model';
import { Movie } from '../../shared/movie.model';
import { IdListService } from '../id-list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [IdListService]   
})
export class ItemDetailComponent implements OnInit {
  @Input() vod: Vod;
  movies: Movie[];

  constructor(public IdListService: IdListService) { }

  ngOnInit() {
      this.movies = this.IdListService.getMovies();
  }

}
