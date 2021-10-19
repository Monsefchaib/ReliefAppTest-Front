import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { History } from 'src/app/Models/History';
import { HistoryService } from 'src/app/Services/History/history.service';
import { DataServiceService } from '../../Services/data-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  videoID!: string | null;
  videoURL: string = "" ;
  historyList: History[] = [];

  constructor(private data : DataServiceService, private historyServices: HistoryService) {
    
   }

  ngOnInit(): void {

      this.getAllHistory();
      this.updateHistoryFromSearchComponent();
  }

  getAllHistory(){
    this.historyServices.getAllHistory().subscribe((response:any)=>{
      if(response !== null){
      this.historyList=response.reverse()
      }
    })
  
  }

  clickedLink(value:string){
    this.data.sendURL(value);
  }

  updateHistoryFromSearchComponent(){
  if (this.data.subsVar==undefined) {  
    this.data.subsVar = this.data.    
    invokeHistoryMethod.subscribe((name:string) => {    
      this.getAllHistory();    
    });  
  }  
  }  

}
