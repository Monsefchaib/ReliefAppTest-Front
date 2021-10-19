import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataServiceService } from '../../Services/data-service.service';
import { HistoryService } from '../../Services/History/history.service';
import { History } from 'src/app/Models/History';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  videoURL: string = "" ;
  linkFormControl = new FormControl('', []);
  safeURL !: SafeResourceUrl;
  url!: SafeResourceUrl;
  newHistory :History={} as History;
  time = new Date();



  constructor(private data:DataServiceService,private historyService : HistoryService){
 }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.videoURL = message);
  }

  addToHistory(history:History){
    this.historyService.addToHistory(this.newHistory).subscribe((response)=>{
      console.log(response);
    });

  }
  
  clicklink():void{
  
    this.videoURL=this.linkFormControl.value;
    this.newHistory.url=this.linkFormControl.value;
    this.newHistory.timeDate=this.time.toLocaleString();
    this.data.sendURL(this.videoURL);
    this.addToHistory(this.newHistory);
    this.updateHistory();
  }

  updateHistory(){    
    this.data.updateHistory();    
  } 




}
