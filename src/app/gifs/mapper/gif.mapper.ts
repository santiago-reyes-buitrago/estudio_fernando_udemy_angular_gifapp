import {GyphyItem} from '../interfaces/fiphy.interfaces';
import {Gif} from '../services/gif.interface';

export class GifMapper {
  static mapGyphyItemToGif(item:GyphyItem):Gif{
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }
  static mapGiphyToGifArray(items: GyphyItem[]):Gif[] {
    return items.map(this.mapGyphyItemToGif);
  }
}
