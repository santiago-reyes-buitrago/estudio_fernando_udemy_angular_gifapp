import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import type {GyphyResponse} from '../interfaces/fiphy.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private http = inject(HttpClient);

  constructor() {
    this.loadTrendingGifs();
  }
  loadTrendingGifs(){
    this.http.get<GyphyResponse>(`${environment.GyphyUrl}/gifs/trending`,{
      params:  {
        api_key: environment.GyphyApiKey,
        limit: 10
      }
    })
  }
}
