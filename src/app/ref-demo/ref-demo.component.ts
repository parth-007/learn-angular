import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ref-demo',
  templateUrl: './ref-demo.component.html',
  styleUrls: ['./ref-demo.component.css', '../../assets/style.css']
})
export class RefDemoComponent implements OnInit, AfterViewInit {

  name = "Angular";

  @Input() cssClass:string;
  @ViewChild("ipt") input: ElementRef;

  // Accessing div element on the UI
  // Can make chanes in that using TS file
  @ViewChild("containerDiv", {static: true}) div: ElementRef;

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    let html = `<p>Good going</p>`;
    this.div.nativeElement.innerHTML = html;
    // this.div.nativeElement.className = this.cssClass;
    this.input.nativeElement.value = this.name;

    // Typecasting the div element, because we know it is a div element
    let divElement = this.div.nativeElement as HTMLDivElement;
    divElement.className = this.cssClass;
  }

}
