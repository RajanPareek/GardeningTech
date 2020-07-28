import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Common } from 'src/models/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() commonData: Common;
  @Output() openMap: EventEmitter<any> = new EventEmitter();

  getUsefulLinks() {    
    if(!this.commonData.links)
      return [];
    return this.commonData.links.filter(x => x.isUsefulLink);
  }

  openGoogleMap(){
    this.openMap.emit(null);    
  }
}