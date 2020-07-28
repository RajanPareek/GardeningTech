import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Common, EmailObj } from 'src/models/common';
import { CommonDataService } from '../../common-data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  @Input() commonData: Common;
  @Output() openMap: EventEmitter<any> = new EventEmitter();
  model: EmailObj;
  submitted = false;

  constructor(private commonDataService: CommonDataService) {
    this.model = new EmailObj();
  }

  onSubmit() {    
    console.log(this.model.name);
    this.commonDataService.sendEmail(this.model).subscribe((data:boolean)=> 
    {
      this.submitted = true;
    });
  }

  openGoogleMap(){
    this.openMap.emit(null);    
  }
}