import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { Employee, numberInterface, Person } from 'src/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, numberInterface  {

  appStyle = "teams"
  x = 2;
  y = 4;
  title = 'poc-app';
  fullname = 'Parth Mangukiya';
  today = Date.now();
  fruits = ['mango', 'apple', 'guava'];

  // Pass this data to app-child
  currentItem = "Television"; // This will go to the child component
  sale = 5;

  persons:Person[] = [
    {
      id: "2D",
      name: "Roy",
      age: 20,
      isAdult: true
    },
    {
      name: "Malan",
      age: 30,
      isAdult: true
    },
    {
      id: "1E",
      name: "Root",
      age: 10,
      isAdult: false
    },
    {
      name: "Wood",
      age: 35,
      isAdult: true
    }
  ];

  @Input() propertyVal: string = '';

  // Employee interface specific data
  // eName1 = "Alex";
  // eName2 = "Greg";
  // eSalary1 = 55000;
  // eSalary2 = 65000;
  // eAge1 = 24;
  // eAge2 = 26;
  // eDesignation1 = "Intern";
  // eDesignation2 = "UI Designer";
  // eId1 = 1;
  // eId2 = 2;
  // eBgrp1 = "B+";
  // eBgrp2 = "A+";

  employees:Employee[] = [
    {
      id: 1,
      name: "Alex",
      bGroup: "A+",
      designation: "Intern",
      salary: 2300
    },
    {
      id: 2,
      name: "Brian",
      bGroup: "B+",
      designation: "UX Designer",
      age: 29,
    },
    {
      id: 3,
      name: "Clark",
      bGroup: "O+",
      designation: "Manager",
      salary: 5000,
      age: 31
    }
  ]

  constructor() {}

  showAddress(address) {
    console.warn(address.value);
  }
  
  getVal(value:string):void {
    this.propertyVal = value;
    // this.currentItem = value;
  }

  ngOnInit() {
    console.log("Parent component init");
  }

  ngOnChanges() {
    console.log("Parent component onChange")
  }

  addItem(fruit: string) {
    this.fruits.push(fruit);
  }
}
