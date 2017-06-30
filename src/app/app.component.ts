import { Component } from '@angular/core';
import { DefaultListComponent } from './default-list/default-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'vods';

  onNav(feature: string) {
    this.loadedFeature = feature;
  }
}
