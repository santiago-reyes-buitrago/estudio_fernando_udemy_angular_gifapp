import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GifsSideMenuComponent} from '../../components/gifs-side-menu-component/gifs-side-menu-component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    GifsSideMenuComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
