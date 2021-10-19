import { Component } from '@angular/core';
import { DataServiceService } from './Services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberOfBookmarks:number = 0;
  title = 'ReliefApp-FRONT';

  constructor(private data:DataServiceService){
  }

  ngOnInit(): void {
    this.data.bookmarksNumber.subscribe(response => this.numberOfBookmarks = response);
  }

}
