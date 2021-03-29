import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  // templateUrl: './version-parent.component.html',
  template: `<h2>Source code version</h2>
            <button (click)="newMinor()">New Minor</button>
            <button (click)="newMajor()">New Major</button>
            <app-version-child [major]="major" [minor]="minor"></app-version-child>`,
  styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent implements OnInit {

  major = 1;
  minor = 23;

  newMinor() { 
    this.minor++;
  }

  newMajor() {
    this.minor = 0;
    this.major++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
