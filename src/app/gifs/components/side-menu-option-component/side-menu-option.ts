import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface MenuOption {
  label: string;
  icon: string;
  router: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-option-component',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-option.html',
  styleUrl: './side-menu-option.css'
})
export class SideMenuOptionComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      router: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      router: '/dashboard/search'
    }
  ];
}
