import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DefaultListComponent } from './default-list/default-list.component';
import { IdListComponent } from './id-list/id-list.component';
import { IdmovieListComponent } from './idmovie-list/idmovie-list.component';
import { ListComponent } from './list/list.component';
import { VodItemComponent } from './list/vod-item/vod-item.component';
import { VodDetailComponent } from './vod-detail/vod-detail.component';
import { TeenListComponent } from './list/teen-list/teen-list.component';
import { ChildListComponent } from './list/child-list/child-list.component';
import { AdultListComponent } from './list/adult-list/adult-list.component';
import { ItemDetailComponent } from './default-list/item-detail/item-detail.component';
import { MovieDetailComponent } from './default-list/item-detail/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultListComponent,
    IdListComponent,
    IdmovieListComponent,
    ListComponent,
    VodItemComponent,
    VodDetailComponent,
    TeenListComponent,
    ChildListComponent,
    AdultListComponent,
    ItemDetailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
