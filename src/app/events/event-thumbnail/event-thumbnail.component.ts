import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// component interaction with Input and Output 
 @Input() event:any;
//  @Output() eventClick = new EventEmitter();
 
// handleClickMe() {
//   this.eventClick.emit('foo');
//   console.log("Clicked");
// }

// component interaction with instance variables
// logFoo(){
//   console.log('foo');
// }

// someProperty = "Property";
}
