import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from 'src/interfaces';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, Employee {

  // data:Employee[] = [];
  @Input() id;
  @Input() name;
  @Input() designation;
  @Input() salary?;
  @Input() age?;
  @Input() bGroup;
  
  constructor() { }

  ngOnInit(): void {
    console.log("Employee on Init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Emp here");
    console.log(changes);
    // this.data.push({
    //   id: changes.id.currentValue,
    //   name: changes.name.currentValue,
    //   bGroup: changes.bGroup.currentValue,
    //   designation: changes.designation.currentValue
    // });
  }

}
