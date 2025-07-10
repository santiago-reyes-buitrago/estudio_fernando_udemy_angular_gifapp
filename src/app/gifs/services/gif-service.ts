import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import type {GyphyResponse} from '../interfaces/fiphy.interfaces';
import {Gif} from './gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import {map, tap} from 'rxjs';


const loadFromLocalStorage = ():Record<string,Gif[]> => {
  const searchHistory = localStorage.getItem('searchHistory');
  return searchHistory ? JSON.parse(searchHistory): {}
}
@Injectable({
  providedIn: 'root'
})
export class GifService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchHistory = signal<Record<string,Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.http.get<GyphyResponse>(`${environment.GyphyUrl}/gifs/trending`,{
      params:  {
        api_key: environment.GyphyApiKey,
        limit: 20
      }
    }).subscribe((response) => {
      const gifs = GifMapper.mapGiphyToGifArray(response.data);
      this.trendingGifs.set(gifs);
      console.log(gifs);

    })
  }

  searchGifs(searchTerm: string) {
    return this.http.get<GyphyResponse>(`${environment.GyphyUrl}/gifs/search?`, {
      params: {
        api_key: environment.GyphyApiKey,
        q: searchTerm,
        limit: 20
      }
    }).pipe(
      map(({data}) => data),
      map((items) => GifMapper.mapGiphyToGifArray(items)),
      tap((items) => {
        this.searchHistory.update(history => ({
          ...history,
          [searchTerm.toLowerCase()]: items,

        }))
      })
    );
  }

  getHistoryGifs(query:string){
    return this.searchHistory()[query] ?? []
  }

  saveToLocalStorage =  effect(()=>{
    // console.log(`Character count: ${this.characters().length}`);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory()));
  })
}
