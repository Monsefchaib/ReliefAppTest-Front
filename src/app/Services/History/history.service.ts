import { Injectable } from '@angular/core';
import { WebRequestService } from '../Web/web-request.service';
import { History } from 'src/app/Models/History';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private webRequestService:WebRequestService) { }

  addToHistory(history:History){
    return this.webRequestService.post('addtohistory',history)
  }

  getAllHistory(){
   return this.webRequestService.get('allhistory')
  }
}
