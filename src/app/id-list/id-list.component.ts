import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Vod } from '../shared/vod.model';
import { NgForm } from '@angular/forms';
import { IdListService } from './id-list.service';
import { ItemDetailComponent } from '../default-list/item-detail/item-detail.component';

@Component({
  selector: 'app-id-list',
  templateUrl: './id-list.component.html',
  styleUrls: ['./id-list.component.css'],
  providers: [IdListService]    
})
export class IdListComponent implements OnInit {
  id: number;
  public vod: Vod;

  constructor(public IdListService: IdListService) { }

  ngOnInit() {
  }
  onSetItem(form: NgForm) {
    console.log(form);
    const val = form.value;
    this.vod = this.IdListService.getvod(val.id);
   }
}
