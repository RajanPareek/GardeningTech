import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Common, EmailObj } from 'src/models/common';
import { CommonDataService } from '../../services/common-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { timer, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  animations: [
    trigger('slideUpDown', [
      state('true', style({  display: 'block' })),
      state('false', style({ display: 'none' })),
      transition('false <=> true', animate(500))
    ])
  ] 
})

export class ContactusComponent {
  @Input() commonData: Common;
  @Output() openMap: EventEmitter<any> = new EventEmitter();
  model: EmailObj;
  submitted = false;
  message: string;
  successful = false;
  failed = false;
  timerInSeconds: Observable<number>;

  constructor(private commonDataService: CommonDataService) {
    this.model = new EmailObj();
  }

  onSubmit(ngF:NgForm): void {
    this.submitted = true;    
    this.commonDataService.sendEmail(this.model).subscribe((data:boolean)=> 
    {
      ngF.resetForm();
      this.submitted = false;
      this.setMessage(data);
    });    
  }

  setMessage(data:boolean):void {
    this.timerInSeconds = timer(5000);
    if(data) {
      this.successful = true;
    } else {
      this.failed = true;
    }      
    this.timerInSeconds.subscribe(val => { this.successful = false; this.failed = false; });
  }

  openGoogleMap(): void {
    this.openMap.emit(null);    
  }
}