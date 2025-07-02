import { Component } from '@angular/core';
import {SideMenuHeaderComponent} from '../side-menu-header-component/side-menu-header-component';
import {SideMenuOptionComponent} from '../side-menu-option-component/side-menu-option';

@Component({
  selector: 'app-gifs-side-menu-component',
  imports: [
    SideMenuHeaderComponent,
    SideMenuOptionComponent
  ],
  templateUrl: './gifs-side-menu-component.html',
  styleUrl: './gifs-side-menu-component.css'
})
export class GifsSideMenuComponent {

}
