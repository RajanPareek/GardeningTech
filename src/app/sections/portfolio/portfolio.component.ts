import { Component, Input } from '@angular/core';
import { Common, Portfolio } from 'src/models/common';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {  
  @Input()
  set commonData(value: Common) {
    if (value && value.portfolios) { //null check
      for (let pfolio of value.portfolios) {
      
        const album = {
           src: pfolio.imagePath,
           caption: pfolio.name,
           thumb: pfolio.imagePath,
           description: pfolio.description
        };
   
        this._portfolios.push(album);
      }
      this._portfolioHeading = value.portfolioHeading;
    }
  }

  _portfolioHeading: string = "";
  _portfolios: Array<any> = [];
  constructor(private _lightbox: Lightbox) {    
  }
 
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._portfolios, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}