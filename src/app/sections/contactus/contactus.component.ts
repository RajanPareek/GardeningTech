import { Component, Input } from '@angular/core';
import { Common } from 'src/models/common';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  @Input() commonData: Common;
}