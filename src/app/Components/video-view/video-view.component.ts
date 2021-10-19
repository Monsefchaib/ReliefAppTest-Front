import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { BookmarksService } from 'src/app/Services/Bookmarks/bookmarks.service';
import { DataServiceService } from '../../Services/data-service.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {
  starType:string = "star_border";
  videoURL:string = "";
  visible:Boolean = false;
  constructor(private data:DataServiceService, private bookmarksService:BookmarksService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => {
      if(this.videoURL !== "https://www.youtube.com/embed/null"){
       this.visible = true
       console.log("ana hnaa")
    }
       this.videoURL=message;

    });
  }

  addToBookmarks(){
    this.bookmarksService.addToBookmarks(this.videoURL).subscribe((response)=>{
      console.log(response);
      this.starType="star"
    })
  }
}
