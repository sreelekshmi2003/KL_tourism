import { Component } from '@angular/core';
import { hotspots } from 'src/assets/hotsopt';

@Component({
  selector: 'app-hot-spot-page',
  templateUrl: './hot-spot-page.component.html',
  styleUrls: ['./hot-spot-page.component.css']
})
export class HotSpotPageComponent {
  spotdata = hotspots;

}
