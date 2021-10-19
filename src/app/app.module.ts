import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SafeLinkPipe } from './Pipes/safe-link.pipe';
import { VideoViewComponent } from './Components/video-view/video-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HistoryComponent } from './Components/history/history.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { BookmarksComponent } from './Components/bookmarks/bookmarks.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SafeLinkPipe,
    VideoViewComponent,
    HistoryComponent,
    BookmarksComponent,
    
  ],
  imports: [
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
