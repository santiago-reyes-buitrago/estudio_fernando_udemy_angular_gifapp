import { Component } from '@angular/core';
import {environment} from '@environments/environment';

@Component({
  selector: 'gif-side-menu-header-component',
  imports: [],
  templateUrl: './side-menu-header-component.html',
  styleUrl: './side-menu-header-component.css'
})
export class SideMenuHeaderComponent {
  envs = environment
}
