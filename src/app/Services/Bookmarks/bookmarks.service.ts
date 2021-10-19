import { Injectable } from '@angular/core';
import { WebRequestService } from '../Web/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private webRequestService:WebRequestService) { }

  addToBookmarks(url:string){
    return this.webRequestService.post('addtobookmarks',{url})
  }

  getAllBookmarks(){
   return this.webRequestService.get('allbookmarks')
  }
}
