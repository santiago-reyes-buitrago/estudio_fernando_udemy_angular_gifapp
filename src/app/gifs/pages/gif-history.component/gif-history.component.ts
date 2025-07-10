import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {GifService} from '../../services/gif-service';
import {GifList} from '../../components/gif-list/gif-list';

@Component({
  selector: 'gif-history',
  imports: [
    GifList
  ],
  templateUrl: './gif-history.component.html',
  styleUrl: './gif-history.component.css'
})
export default class GifHistoryComponent {

  gifService = inject(GifService);
  query = toSignal(inject(ActivatedRoute).params.pipe(
    map((params: Params) => params['query'] ?? '')
  ))

  gifsByKey = computed(()=> {return this.gifService.getHistoryGifs(this.query())});
}
