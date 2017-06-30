import { Component, OnInit, Input } from '@angular/core';
import { Vod } from '../../shared/vod.model';
import { Movie } from '../../shared/movie.model';
import { DefaultListService } from '../default-list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [DefaultListService]   
})
export class ItemDetailComponent implements OnInit {
  @Input() vod: Vod;
  movies: Movie[];

  constructor(public DefaultListService: DefaultListService) { }

  ngOnInit() {
     this.movies = this.DefaultListService.getMovies(this.vod);
  }

}
