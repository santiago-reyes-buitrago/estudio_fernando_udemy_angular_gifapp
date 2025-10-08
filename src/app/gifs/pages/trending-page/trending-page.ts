import {Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import {GifList} from '../../components/gif-list/gif-list';
import {GifService} from '../../services/gif-service';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-trending-page',
  imports: [GifList,],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export class TrendingPage {
  ScrollDivRef = viewChild<ElementRef<HTMLDivElement>>('ContainerGifGroup')
  gifService  = inject(GifService);


  handleScroll(event: Event) {
    const scrollDiv = this.ScrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    const {scrollTop, scrollHeight, clientHeight} = scrollDiv;

    const isBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    if (isBottom) {
      this.gifService.loadTrendingGifs()
    }
    console.log(scrollDiv,{isBottom});
  }
}
