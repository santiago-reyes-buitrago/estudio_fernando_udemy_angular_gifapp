import {Component, input} from '@angular/core';
import {GifListItem} from '../gif-list-item/gif-list-item';

interface Gif {
  url: string;
}

@Component({
  selector: 'gif-list',
  imports: [
    GifListItem
  ],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css'
})
export class GifList {
  gifInfo = input.required< string[]>()
}
