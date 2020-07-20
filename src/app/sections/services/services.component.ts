import { Component, Input } from '@angular/core';
import { Common } from 'src/models/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {  
  @Input() commonData: Common;
}