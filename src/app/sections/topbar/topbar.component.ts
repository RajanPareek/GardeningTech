import { Component, Input } from '@angular/core';
import { Common } from 'src/models/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent {
  @Input() commonData: Common;
}
