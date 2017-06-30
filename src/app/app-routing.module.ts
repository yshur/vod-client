import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultListComponent } from './default-list/default-list.component';
import { IdListComponent } from './id-list/id-list.component';
import { IdmovieListComponent } from './idmovie-list/idmovie-list.component';

const appRoutes: Routes = [
 { path: '', redirectTo: './default-list', pathMatch: 'full'},
 { path: 'default-list', component: DefaultListComponent },
 { path: 'id-list', component: IdListComponent },
 { path: 'idmovie-list', component: IdmovieListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
