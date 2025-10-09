import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {
  private _trendingScrollState = signal<number>(0);
  set trendingScrollState(value: WritableSignal<number>) {
    this._trendingScrollState = value;
  }
  get trendingScrollState(): WritableSignal<number> {
    return this._trendingScrollState;
  }
}
