import {Component, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'gif-list-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './gif-list-item.html',
  styleUrl: './gif-list-item.css'
})
export class GifListItem {
  gif = input.required<string>();
}
