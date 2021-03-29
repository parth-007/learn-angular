import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css', '../../assets/style.css']
})
export class AppChildComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() item;
  @Input() discountRate;
  @Input() cssClass;
  ngOnInit(): void {
    console.log("Child component init");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child component onChange");
  }
}
