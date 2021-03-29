import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  constructor() { }
  @Output() newItemEvent = new EventEmitter<string>();

  addEventItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
  }

  getME(params:number) {
    
  }

}
