import { Component, EventEmitter, OnInit } from '@angular/core';
import { Vod } from '../shared/vod.model';
import { Movie } from '../shared/movie.model';
import { DefaultListService } from './default-list.service';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrls: ['./default-list.component.css'],
  providers: [DefaultListService]  
})
export class DefaultListComponent implements OnInit {
  vods: Vod[] = [];
  vodSelected: Vod;

  constructor(public DefaultListService: DefaultListService) {
     this.vods = this.DefaultListService.getvods();
   }

  ngOnInit() {
    this.DefaultListService.itemSelected.subscribe( //get informed about changes
        (vod:Vod) => {
          this.vodSelected = vod;
        }
      );
  }

}
