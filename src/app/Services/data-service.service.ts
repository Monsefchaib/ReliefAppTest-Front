import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new Subject<string>();
  private bookmarksSource = new Subject<number>();
  currentMessage = this.messageSource.asObservable();
  bookmarksNumber=this.bookmarksSource.asObservable();
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  sendURL(message:string){
    this.messageSource.next(message);
  }

  sendBookmarksNumber(number:number){
    this.bookmarksSource.next(number);
  }

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  } 
}
