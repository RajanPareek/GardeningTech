import { Component, Input } from '@angular/core';
import { Common } from 'src/models/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() commonData: Common;

  getUsefulLinks() {    
    if(!this.commonData.links)
      return [];
    return this.commonData.links.filter(x => x.isUsefulLink);
  }
}