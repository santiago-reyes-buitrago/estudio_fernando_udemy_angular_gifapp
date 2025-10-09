import {AfterViewInit, Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import {GifList} from '../../components/gif-list/gif-list';
import {GifService} from '../../services/gif-service';
import {NgOptimizedImage} from '@angular/common';
import {ScrollStateService} from '../../../shared/services/scroll-state.service';


@Component({
  selector: 'app-trending-page',
  imports: [GifList,],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export class TrendingPage implements AfterViewInit {
  ScrollDivRef = viewChild<ElementRef<HTMLDivElement>>('ContainerGifGroup')
  gifService  = inject(GifService);
  scrollState = inject(ScrollStateService);
  handleScroll(event: Event) {
    const scrollDiv = this.ScrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    const {scrollTop, scrollHeight, clientHeight} = scrollDiv;

    const isBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    this.scrollState.trendingScrollState.set(scrollTop);
    if (isBottom) {
      this.gifService.loadTrendingGifs()
    }
    console.log(scrollDiv,{isBottom});
  }

  ngAfterViewInit(): void {
    const scrollDiv = this.ScrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollState.trendingScrollState()

  }
}
