import { Component, Input, OnInit } from '@angular/core';
import { Common } from 'src/models/common';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }
  @Input() commonData: Common;  

  getMenuLinks() {
    if(!this.commonData.links)
      return [];
    return this.commonData.links.filter(x => x.isMenu);     
  }  

  removeWhitespace(value: string): string {
    if (value === undefined)
      return 'undefined';
    return value.replace(/\s/g, "_");
  }
}