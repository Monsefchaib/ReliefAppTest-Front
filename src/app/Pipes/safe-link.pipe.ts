import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Pipe({
  name: 'safeLink'
})
export class SafeLinkPipe implements PipeTransform {
videoID!:string |null;
videoURL!:string | null;
  constructor(private dom:DomSanitizer){

  }
  transform(value: string, ...args: unknown[]): unknown {
    this.videoID= this.getId(value) 
    this.videoURL = this.videoURL="https://www.youtube.com/embed/"+this.videoID
    console.log(this.videoURL);
    return this.dom.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  getId(url:string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }
}
