import {Component, inject, signal} from '@angular/core';
import {GifList} from '../../components/gif-list/gif-list';
import {GifService} from '../../services/gif-service';
import {Gif} from '../../services/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [
    GifList
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export class SearchPage {
  private gifService = inject(GifService);
  protected gifs = signal<Gif[]>([])
  onSearch(value: string) {
    console.log(value);
    this.gifService.searchGifs(value).subscribe((resp) => this.gifs.set(resp));
  }
}
