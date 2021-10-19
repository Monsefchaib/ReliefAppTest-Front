import { Component, OnInit } from '@angular/core';
import { Bookmarks } from 'src/app/Models/Bookmarks';
import { BookmarksService } from 'src/app/Services/Bookmarks/bookmarks.service';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookMarksList : Bookmarks[] =[];
  bookMarksNumber:number = 0;
  videoURL!:string;
  constructor(private data:DataServiceService, private bookmarksService:BookmarksService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.videoURL = message);
    this.getAllBookmarks();
  }

  getAllBookmarks(){
    this.bookmarksService.getAllBookmarks().subscribe((response:any)=>{
      this.bookMarksList=response;
      this.bookMarksNumber=this.bookMarksList.length;
      this.data.sendBookmarksNumber(this.bookMarksNumber);
    })
    }
    
    clickedLink(value:string){
      this.data.sendURL(value);
    }

    

}
