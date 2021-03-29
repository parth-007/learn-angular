import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Person } from 'src/interfaces';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() person:Person;

  ngOnInit(): void {
    console.log("Person component init")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Person component ngOnChange")
  }
}
