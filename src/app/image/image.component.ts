import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  url:string | ArrayBuffer = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(event) {
    if(event.target.files && event.target.files[0])
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result; 
      }
    }
  }

}
