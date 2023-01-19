import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() item = 0  
  @Input() item1:{name:string, email:string}={name:'',email:''};
  @Output() updateDataEvent= new EventEmitter<string>();
  ngOnInit(): void {
  }


}
